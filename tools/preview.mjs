import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
const root = path.resolve(import.meta.dirname, "..", "docs");
const base = "/sandwich-shop-demo";
const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};
http
  .createServer(async (req, res) => {
    try {
      let name = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      if (name === base || name === base + "/") name = "/index.html";
      else if (name.startsWith(base + "/")) name = name.slice(base.length);
      let target = path.resolve(root, "." + name);
      if (!target.startsWith(root + path.sep)) throw Error();
      if ((await fs.stat(target)).isDirectory())
        target = path.join(target, "index.html");
      const data = await fs.readFile(target);
      res.writeHead(200, {
        "Content-Type":
          mime[path.extname(target)] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(Number(process.env.PORT || 4173), "127.0.0.1", () =>
    console.log("Preview on port " + (process.env.PORT || 4173) + base + "/"),
  );
