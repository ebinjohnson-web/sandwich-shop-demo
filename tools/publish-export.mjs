import fs from "node:fs";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..");
const docs = path.resolve(root, "docs");
if (path.dirname(docs) !== root || path.basename(docs) !== "docs")
  throw new Error("Unexpected export target");
const chunks = path.resolve(docs, "_next");
if (path.dirname(chunks) !== docs || path.basename(chunks) !== "_next")
  throw new Error("Unexpected generated asset target");
fs.rmSync(chunks, { recursive: true, force: true });
fs.cpSync(path.join(root, "out"), docs, { recursive: true });
// Keep previously shared .html deep links working alongside App Router routes.
for (const route of ["about", "catering", "contact", "menu"])
  fs.copyFileSync(
    path.join(docs, route, "index.html"),
    path.join(docs, route + ".html"),
  );
for (const file of ["styles.css", "script.js"]) {
  const target = path.join(docs, file);
  if (fs.existsSync(target)) fs.unlinkSync(target);
}
fs.writeFileSync(path.join(docs, ".nojekyll"), "");
console.log("Published Next.js static export to docs/");
