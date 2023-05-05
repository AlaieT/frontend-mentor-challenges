import React from "react";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

async function render(pageContext: any) {
  const { Page } = pageContext;

  if (!Page) {
    throw new Error("My render() hook expects pageContext.Page to be defined");
  }

  const pageHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title></title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {}
  };
}

export { render };
