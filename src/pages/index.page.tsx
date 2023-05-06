import React from "react";

import Gallery from "../components/Gallery";

import type { GalleryProps } from "../types";

import styles from "../styles/pages/index.module.scss";
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
            &#8212;
            challenges
          </h1>
          <ul id={styles.description}>
            <li>
              This website contains my solutions for Frontend Mentor challenges.
            </li>
            <li>
              All challenges made as individual web projects, so they include
              using of frameworks, linters, testing and e.t.c. to make practice
              building websites in a realistic workflow.
            </li>
            <li>
              All of these challenges help improve skills and gain experience
              creating websites.
            </li>
          </ul>
        </header>
        <Gallery challenges={pageData.challenges} />
        <footer>Ilya「Alaie」Shafeev</footer>
      </>
    )
  );
};

export { Page };
