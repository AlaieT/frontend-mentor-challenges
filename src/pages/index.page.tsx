import React from "react";

import Gallery from "../components/Gallery";

import type { GalleryProps } from "../types";

import "../styles/pages/index.module.scss";
import "../styles/global.scss";

const Page = () => {
  const [pageData, setPageData] = React.useState<GalleryProps | null>(null);

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/indexData.json`)
      .then((resolve) => resolve.json())
      .then((data) => setPageData(data));
  }, []);

  return (
    pageData && (
      <>
        <header>
          <h1>
            frontend mentor
            <span />
            challenges
          </h1>
          <p>
            This website contains my solution for Frontend Mentor challenges.
            All challenges made as individual web projects, so they include
            using of frameworks, linters, testing and e.t.c.
          </p>
        </header>
        <Gallery challenges={pageData.challenges} />
        <footer>Ilya「Alaie」Shafeev</footer>
      </>
    )
  );
};

export { Page };
