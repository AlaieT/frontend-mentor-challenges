import express from "express";
import compression from "compression";
import { renderPage } from "vite-plugin-ssr/server";
import { dirname } from "path";
import { fileURLToPath } from "url";

(async function () {
  const port = 3000;
  const root = `${dirname(fileURLToPath(import.meta.url))}/..`;
  const app = express();
  const viteDevMiddleware = (
    await (
      await import("vite")
    ).createServer({
      root,
      server: { middlewareMode: true }
    })
  ).middlewares;

  app.use(compression());
  app.use(viteDevMiddleware);

  app.get("*", async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) return next();

    const { body, statusCode, contentType, earlyHints } = httpResponse;

    if (res.writeEarlyHints)
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });

    res.status(statusCode).type(contentType).send(body);
  });

  app.listen(port);

  console.log(`Server running at http://localhost:${port}`);
})();
