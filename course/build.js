// Builds dist/espanol-en-voz-alta.html from src/template.html, data/l*.js (lessons) and data/v*.js (variations).
// Usage: node build.js
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataDir = path.join(root, "data");
const { loadLessons, clips } = require("./audio");
const files = fs.readdirSync(dataDir).filter(f => /^[lv]\d+\.js$/.test(f)).sort();
const data = files.map(f => `// ${f}\n` + fs.readFileSync(path.join(dataDir, f), "utf8")).join("\n");

const template = fs.readFileSync(path.join(root, "src", "template.html"), "utf8");
const marker = "/*__LESSON_DATA__*/";
if (!template.includes(marker)) throw new Error("Template is missing " + marker);
if (/<\/script/i.test(data)) throw new Error("Lesson data must not contain </script>");

// Recorded clips (tools/tts.py writes docs/audio/<id>.mp3); only clips that exist are listed,
// so the page falls back to the browser voice for anything not recorded yet.
const audioDir = path.join(root, "..", "docs", "audio");
const audioMap = {};
for (const c of clips(loadLessons()))
  if (fs.existsSync(path.join(audioDir, c.id + ".mp3"))) for (const k of c.keys) audioMap[k] = c.id;
// Hub banner (Ideogram, art/banner-options/evva_pizarra2.png), inlined so the page stays one file.
const banner = "data:image/webp;base64," + fs.readFileSync(path.join(root, "src", "banner.webp")).toString("base64");
const withAudio = base => template.replace("__BANNER__", banner).replace(marker, () =>
  data + `
window.AUDIO = ${JSON.stringify({ base, clips: audioMap })};
`);
// The claude.ai artifact can't carry a thousand files, so it streams them from GitHub Pages.
const out = withAudio("https://a-c-pack.github.io/espanol-en-voz-alta/audio/");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "espanol-en-voz-alta.html"), out);

// GitHub Pages copy: the template omits the document skeleton, so wrap it here.
const page = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#14291F">
<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>
${withAudio("audio/")}
</html>
`;
const docs = path.join(root, "..", "docs");
fs.mkdirSync(docs, { recursive: true });
fs.writeFileSync(path.join(docs, "index.html"), page);
console.log(`Built ${files.length} data files -> dist/espanol-en-voz-alta.html and docs/index.html (${Math.round(out.length / 1024)} KB, ${Object.keys(audioMap).length} recorded clips)`);
