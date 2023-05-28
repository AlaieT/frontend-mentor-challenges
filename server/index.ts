import express from "express";
import compression from "compression";
import { createServer } from "vite";
import { renderPage } from "vite-plugin-ssr/server";
import { dirname } from "path";
import { fileURLToPath } from "url";

(async function () {
  const port = 3000;
  const app = express();
  const vite = await createServer({
      root: `${dirname(fileURLToPath(import.meta.url))}/..`,
      configFile: `${dirname(fileURLToPath(import.meta.url))}/../scripts/vite/vite.config.ts`,
      server: { middlewareMode: true },
      appType: "custom"
    });

  app.use(compression());
  app.use(vite.middlewares);

  app.get("*", async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    };

    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) return next();

    const { body, statusCode, contentType } = httpResponse;

    res.statusCode = statusCode;
    res.setHeader("content-type", contentType);
    res.end(body);
  });

  app.listen(port);

  console.log(`Server running at http://localhost:${port}`);
}());
