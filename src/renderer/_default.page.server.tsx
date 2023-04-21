export { render };
// See https://vite-plugin-ssr.com/data-fetching
// export const passToClient = ["pageProps", "urlPathname"];

import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
// import logoUrl from "./logo.svg";

async function render(pageContext: any) {
  const { Page } = pageContext;

  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(<Page />);

  // See https://vite-plugin-ssr.com/head
  // const { documentProps } = pageContext.exports;
  // const title = (documentProps && documentProps.title) || "Vite SSR app";
  // const desc =
  //   (documentProps && documentProps.description) ||
  //   "App using Vite + vite-plugin-ssr";

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
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
