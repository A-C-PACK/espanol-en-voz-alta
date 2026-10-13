"""Record every clip in voices/manifest.json through qwen-tts-studio, using the
voices already locked for the CDMX game, and encode them to MP3 in docs/audio/.

    node course/audio.js                         # refresh the manifest first
    python -X utf8 course/tools/tts.py           # import voices, record missing clips
    python -X utf8 course/tools/tts.py --limit 5 # stop after 5 clips (timing test)
    python -X utf8 course/tools/tts.py --fresh id1,id2   # redo bad takes with a new seed
    python -X utf8 course/tools/qa.py            # transcribe on the Spark, list suspect takes

The CDMX characters are copied into this course's own studio project through the
voice library (save, import, then drop the library entry), so the game's project is
only read. Every line is cloned from the same reference clip the game uses, which is
what keeps each voice identical to the game's. Safe to re-run: a clip whose WAV exists
is skipped, and voices/tts_state.json remembers the project, voices and rows. The GPU is
serialised on the Spark, so clips go one at a time on purpose.
"""

import json
import pathlib
import random
import subprocess
import sys
import time
import urllib.error
import urllib.request

COURSE = pathlib.Path(__file__).resolve().parent.parent
ROOT = COURSE.parent
CDMX = ROOT.parent / "CDMX"
BASE = "http://127.0.0.1:7000"
STATE = COURSE / "voices" / "tts_state.json"
MANIFEST = COURSE / "voices" / "manifest.json"
WAV = COURSE / "voices" / "wav"          # masters, not in git
MP3 = ROOT / "docs" / "audio"            # what the page plays
LANG = "spanish"


def ffmpeg():
    local = CDMX / "tools" / "local.json"
    if local.exists():
        return json.loads(local.read_text(encoding="utf-8")).get("ffmpeg", "ffmpeg")
    return "ffmpeg"


def call(path, body=None, method=None, raw=False, timeout=900):
    data = json.dumps(body).encode("utf-8") if body is not None else None
    req = urllib.request.Request(BASE + path, data=data,
                                 method=method or ("POST" if data is not None else "GET"),
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        payload = r.read()
    return payload if raw else json.loads(payload.decode("utf-8"))


def load_state():
    if STATE.exists():
        return json.loads(STATE.read_text(encoding="utf-8"))
    return {"slug": None, "chars": {}, "rows": {}}


def save_state(state):
    STATE.write_text(json.dumps(state, indent=1), encoding="utf-8")


def ensure_project(state):
    if state["slug"]:
        return
    project = call("/api/projects", {"name": "Espanol en voz alta"})
    state["slug"] = project["slug"]
    call(f"/api/projects/{state['slug']}", {"language": LANG}, method="PATCH")
    save_state(state)
    print(f"created studio project '{state['slug']}'")


def ensure_voice(state, who):
    """Copy one locked CDMX character into this project, reference clip and all."""
    if who in state["chars"]:
        return
    game = json.loads((CDMX / "tools" / "tts_state.json").read_text(encoding="utf-8"))
    entry = call(f"/api/projects/{game['slug']}/characters/{game['chars'][who]}/save-to-library", {})
    try:
        char = call(f"/api/projects/{state['slug']}/library/{entry['id']}/import", {})
    finally:
        call(f"/api/library/{entry['id']}", method="DELETE")
    state["chars"][who] = char["id"]
    save_state(state)
    print(f"  imported {who}")


def record(state, clip, fresh=False):
    slug = state["slug"]
    row_id = state["rows"].get(clip["id"])
    if not row_id:
        row = call(f"/api/projects/{slug}/rows",
                   {"text": clip["text"], "character_id": state["chars"][clip["who"]]})
        row_id = state["rows"][clip["id"]] = row["id"]
        save_state(state)
    # fresh: the existing take was judged bad, so make a new one with a new seed
    # (the newest take becomes the starred one).
    body = {"attempts": 4, "only_missing": not fresh}
    if fresh:
        body["seed"] = random.randint(1, 2**31 - 1)
    call(f"/api/projects/{slug}/rows/{row_id}/generate", body)
    wav = call(f"/api/projects/{slug}/rows/{row_id}/audio", raw=True)
    (WAV / f"{clip['id']}.wav").write_bytes(wav)
    return len(wav)


def encode(ids):
    """WAV -> mono MP3 (small, plays everywhere); drop MP3s no clip uses any more."""
    MP3.mkdir(parents=True, exist_ok=True)
    made = 0
    for wav in sorted(WAV.glob("*.wav")):
        mp3 = MP3 / (wav.stem + ".mp3")
        if wav.stem not in ids or (mp3.exists() and mp3.stat().st_mtime >= wav.stat().st_mtime):
            continue
        r = subprocess.run([ffmpeg(), "-y", "-hide_banner", "-loglevel", "error", "-i", str(wav),
                            "-ac", "1", "-ar", "24000", "-c:a", "libmp3lame", "-b:a", "48k", str(mp3)],
                           capture_output=True, text=True)
        if r.returncode:
            sys.exit(f"ffmpeg failed on {wav.name}: {r.stderr[-300:]}")
        made += 1
    removed = 0
    for mp3 in MP3.glob("*.mp3"):
        if mp3.stem not in ids:
            mp3.unlink()
            removed += 1
    total = sum(f.stat().st_size for f in MP3.glob("*.mp3"))
    print(f"audio: {made} encoded, {removed} removed, "
          f"{len(list(MP3.glob('*.mp3')))} MP3 files, {total / 1e6:.1f} MB")


def main():
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else None
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    WAV.mkdir(parents=True, exist_ok=True)
    state = load_state()
    ensure_project(state)
    for who in sorted({c["who"] for c in manifest}):
        ensure_voice(state, who)

    fresh = set(sys.argv[sys.argv.index("--fresh") + 1].split(",")) if "--fresh" in sys.argv else set()
    todo = [c for c in manifest if c["id"] in fresh or not (WAV / f"{c['id']}.wav").exists()]
    print(f"{len(manifest)} clips, {len(todo)} to record")
    done = failed = 0
    start = time.time()
    for clip in todo[:limit]:
        t0 = time.time()
        try:
            size = record(state, clip, clip["id"] in fresh)
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            detail = exc.read().decode("utf-8", "replace")[:200] if hasattr(exc, "read") else exc
            print(f"  FAILED {clip['id']} {clip['who']}: {detail}", flush=True)
            failed += 1
            continue
        done += 1
        print(f"  [{done}/{len(todo)}] {time.time() - t0:5.1f}s {size // 1024:>4} KB  "
              f"{clip['who']:<10} {clip['text'][:60]}", flush=True)
    print(f"done: {done} recorded, {failed} failed, {time.time() - start:.0f}s")
    encode({c["id"] for c in manifest})


if __name__ == "__main__":
    main()
