import React, { useState } from "react";

import Challenge from "../Challenge";

import type { GalleryProps } from "../../types";

import styles from "../../styles/components/gallery.module.scss";

const getPages = (current: number, last: number) => {
  const length = last > 7 ? 7 : last;
  const pages = Array(length);

  if (length > 1) pages[length - 1] = last;

  if (current < 5) {
    pages.map((_, idx) => idx + 1);

    if (last > 7) {
      pages[length - 2] = "";
      pages[length - 1] = last;
    }
  }

  return pages;
};

const Gallery = ({ challenges }: GalleryProps) => {
  const [page, setPage] = useState(1);

  return (
    <main>
      <div id={styles.filter}>
        <input type="text" placeholder="Challenge name" />
      </div>
      <div id={styles.challenges}>
        {challenges
          .slice((page - 1) * 6, page * 6)
          .map(({ name, imgSrc }, idx) => (
            <Challenge
              key={name}
              delay={350 * idx}
              name={name}
              imgSrc={imgSrc}
            />
          ))}
      </div>
      <div id={styles.pagination}>
        <button id={styles.back} disabled={page == 1}></button>
        <div id={styles.pages}>
          {getPages(1, challenges.length).map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <button id={styles.next} disabled={page == challenges.length}></button>
      </div>
    </main>
  );
};

export default Gallery;
