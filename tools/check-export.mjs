import fs from "node:fs";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..", "docs");
const routes = [
  "about.html",
  "catering.html",
  "contact.html",
  "index.html",
  "menu.html",
];
for (const file of routes) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) throw new Error("Missing route " + file);
  const html = fs.readFileSync(p, "utf8");
  if (!html.includes("/_next/"))
    throw new Error("Missing Next.js assets " + file);
  if (html.includes("site-header-slot") || html.includes("demo-form-slot"))
    throw new Error("Unconverted component " + file);
  for (const match of html.matchAll(
    /(?:src|href)="(\/sandwich-shop-demo\/(?:assets|_next)\/[^"?#]+)/g,
  )) {
    const local = match[1].slice(19);
    if (!fs.existsSync(path.join(root, decodeURIComponent(local))))
      throw new Error("Missing asset " + local);
  }
}
console.log(
  "Validated " +
    routes.length +
    " exported pages and their local asset references",
);
