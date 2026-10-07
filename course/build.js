// Builds dist/espanol-en-voz-alta.html from src/template.html, data/l*.js (lessons) and data/v*.js (variations).
// Usage: node build.js
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataDir = path.join(root, "data");
const files = fs.readdirSync(dataDir).filter(f => /^[lv]\d+\.js$/.test(f)).sort();
const data = files.map(f => `// ${f}\n` + fs.readFileSync(path.join(dataDir, f), "utf8")).join("\n");

const template = fs.readFileSync(path.join(root, "src", "template.html"), "utf8");
const marker = "/*__LESSON_DATA__*/";
if (!template.includes(marker)) throw new Error("Template is missing " + marker);
if (/<\/script/i.test(data)) throw new Error("Lesson data must not contain </script>");

const out = template.replace(marker, () => data);
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
${out}
</html>
`;
const docs = path.join(root, "..", "docs");
fs.mkdirSync(docs, { recursive: true });
fs.writeFileSync(path.join(docs, "index.html"), page);
console.log(`Built ${files.length} data files -> dist/espanol-en-voz-alta.html and docs/index.html (${Math.round(out.length / 1024)} KB)`);
