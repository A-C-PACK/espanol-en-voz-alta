// Lists every recorded clip the course uses: dialogue lines and vocabulary items.
// A clip's id hashes the voice and the spoken text, so editing a line or recasting a
// partner gives it a new id and tools/tts.py records it again.
// Usage: node audio.js   -> writes voices/manifest.json for tools/tts.py
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const root = __dirname;
const cast = JSON.parse(fs.readFileSync(path.join(root, "voices", "cast.json"), "utf8"));

function loadLessons() {
  const ctx = { window: {} };
  ctx.LESSONS = ctx.window.LESSONS = {};
  vm.createContext(ctx);
  const dir = path.join(root, "data");
  for (const f of fs.readdirSync(dir).filter(f => /^[lv]\d+\.js$/.test(f)).sort())
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
  return ctx.LESSONS;
}

// What the voice actually says: no markup, and the "a / b", "(en)" and "…" shorthand
// of the vocab lists read out as a plain list. Grammar patterns ("ojalá + subj.") are
// voiced up to the "+", or the narrator says "plus sub".
const spoken = s => String(s).replace(/<[^>]+>/g, "").replace(/\s\+\s.*$/, "")
  .replace(/\bXV\b/g, "quince").replace(/\s*\/\s*/g, ", ")
  .replace(/[()]/g, "").replace(/…/g, "").replace(/\s+/g, " ").trim();
const clipId = (who, text) => crypto.createHash("sha1").update(who + "|" + text).digest("hex").slice(0, 12);

// keys: "d<lesson>:<line>" for dialogue, "v:<text>" for vocab (the template looks them up).
function clips(LESSONS) {
  const byId = new Map();
  const add = (key, who, raw) => {
    const text = spoken(raw), id = clipId(who, text);
    if (!byId.has(id)) byId.set(id, { id, who, text, keys: [] });
    byId.get(id).keys.push(key);
  };
  for (const L of Object.values(LESSONS).sort((a, b) => a.id.localeCompare(b.id))) {
    const partner = cast.partners[L.id];
    if (!partner) throw new Error(`voices/cast.json has no partner voice for lesson ${L.id}`);
    L.dialogue.forEach(([w, es], i) => add(`d${L.id}:${i}`, w === "m" ? partner : cast.learner, es));
    for (const [, items] of L.vocab) for (const [es] of items) add("v:" + es, cast.vocab, es);
  }
  return [...byId.values()];
}

module.exports = { loadLessons, clips, spoken };

if (require.main === module) {
  const list = clips(loadLessons());
  fs.writeFileSync(path.join(root, "voices", "manifest.json"),
    JSON.stringify(list.map(({ id, who, text }) => ({ id, who, text })), null, 1));
  console.log(`${list.length} clips -> voices/manifest.json`);
}
