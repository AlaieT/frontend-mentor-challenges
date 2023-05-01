import React from "react";
import { hydrateRoot } from "react-dom/client";

async function render(pageContext: any) {
  const { Page } = pageContext;
  if (!Page) {
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    );
  }
  hydrateRoot(document.getElementById("root")!, <Page />);
}

export { render };
