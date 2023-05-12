import React from "react";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

import type { PageContextServer } from "../types";

async function render(pageContext: PageContextServer) {
  const { Page } = pageContext;

  if (!Page) {
    throw new Error("My render() hook expects pageContext.Page to be defined");
  }

  const pageHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );

  const { documentProps } = pageContext.exports;
  const description = documentProps?.description || "Empty page";
  const title = documentProps?.title || "Empty page";
  const fonts = documentProps?.fonts || "";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="${fonts}" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml
  };
}

export { render };
