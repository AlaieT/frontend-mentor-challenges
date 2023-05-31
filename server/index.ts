/* eslint-disable import/no-extraneous-dependencies */
import express from "express";
import { renderPage } from "vite-plugin-ssr/server";
import { fileURLToPath } from "url";
import path from "path";

const dirname = path.dirname(fileURLToPath(import.meta.url));

async function server() {
  const port = 3000;
  const app = express();

  app.use(express.static(`${dirname}/../dist/client`));

  app.get("*", async (req, res, next) => {
    if (
      !req.originalUrl.startsWith("/assets")
      && !req.originalUrl.startsWith("/data")
    ) {
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
    } else {
      next();
    }

    return undefined;
  });

  app.listen(port);

  console.log(`Server running at http://localhost:${port}`);
}

server();
