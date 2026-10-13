"""Check the recorded clips without listening to all of them, using the CDMX game's
QA tool (faster-whisper on the Spark) pointed at this course's files.

    python -X utf8 course/tools/qa.py           # list suspect takes
    python -X utf8 course/tools/qa.py --redo    # also re-record them with a new seed
"""

import pathlib
import subprocess
import sys

COURSE = pathlib.Path(__file__).resolve().parent.parent
CDMX = COURSE.parent.parent / "CDMX"
sys.path.insert(0, str(CDMX / "tools"))
import qa_audio  # noqa: E402

qa_audio.VOICE = COURSE / "voices" / "wav"
qa_audio.MANIFEST = COURSE / "voices" / "manifest.json"
qa_audio.REPORT = COURSE / "voices" / "qa_report.json"

_transcribe = qa_audio.transcribe


def batched(ids, size=150):
    # A thousand file names overflow the Windows command line the game's tool builds.
    out = {}
    for n in range(0, len(ids), size):
        out.update(_transcribe(ids[n:n + size]))
        _print(f"  transcribed {min(n + size, len(ids))}/{len(ids)}", flush=True)
    return out


qa_audio.transcribe = batched

redo = "--redo" in sys.argv
if redo:
    sys.argv.remove("--redo")      # the game's --redo would call the game's generator
suspects = []
_print = print


def capture(*args, **kw):
    # qa_audio lists each suspect as "  <id> <who>  similarity ..."; keep the ids.
    if args and isinstance(args[0], str) and "similarity" in args[0]:
        suspects.append(args[0].split()[0])
    _print(*args, **kw)


qa_audio.print = capture
qa_audio.main()

if redo and suspects:
    subprocess.run([sys.executable, "-X", "utf8", str(COURSE / "tools" / "tts.py"),
                    "--fresh", ",".join(suspects)])
    report = qa_audio.json.loads(qa_audio.REPORT.read_text(encoding="utf-8"))
    for i in suspects:
        report.pop(i, None)        # re-transcribe the new takes next run
    qa_audio.REPORT.write_text(qa_audio.json.dumps(report, ensure_ascii=False, indent=1),
                               encoding="utf-8")
