import { renderPage } from "vite-plugin-ssr/server";

export default async function handler(req, res) {
  const { url } = req;
  console.log("Request to urlOriginal:", url);

  const pageContextInit = { urlOriginal: url };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    res.statusCode = 200;
    res.end();
    return;
  }

  const { body, statusCode, contentType } = httpResponse;
  res.statusCode = statusCode;
  res.setHeader("content-type", contentType);
  res.end(body);
}
