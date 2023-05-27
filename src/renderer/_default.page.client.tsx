import React from "react";
import { createRoot } from "react-dom/client";

import type { PageContextClient } from "../types";

async function render(pageContext: PageContextClient) {
  const { Page } = pageContext;
  if (!Page) {
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    );
  }
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
}

export { render };
