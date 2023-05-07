import React from "react";

import Gallery from "../components/Gallery";
import Header from "../components/Header";

import type { GalleryProps } from "../types";

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
        <Header />
        <Gallery challenges={pageData.challenges} />
      </>
    )
  );
};

export { Page };
