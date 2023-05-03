import React from "react";

import Challenge from "../Challenge";
import getPages from "../../utils/getPages";

import type { GalleryProps } from "../../types";

import styles from "../../styles/components/gallery.module.scss";

const ON_PAGE = 6;

const Gallery = ({ challenges }: GalleryProps) => {
  const [page, setPage] = React.useState(1);
  // const [isChangingPage, setIsChangingPage] = React.useState(false);
  const onPageChallenges = React.useMemo(
    () => challenges.slice((page - 1) * ON_PAGE, page * ON_PAGE),
    [page, challenges]
  );
  // const pagesCount = React.useMemo(
  //   () => Math.ceil(challenges.length / ON_PAGE),
  //   [challenges]
  // );

  // const handleChangePage = (pageNumber: number) => {
  //   const timeout = setTimeout(() => {
  //     setIsChangingPage((item) => !item);
  //     setPage(pageNumber);
  //     clearTimeout(timeout);
  //   }, 150 * onPageChallenges.length + 750);
  //   setIsChangingPage((item) => !item);
  // };

  return (
    <main>
      <div id={styles.challenges}>
        {challenges.map(({ name, imgSrc }, idx) => (
          <Challenge
            key={name}
            // delay={150 * (idx - (page - 1) * ON_PAGE + 1)}
            name={name}
            imgSrc={imgSrc}
            // disabled={isChangingPage}
          />
        ))}
      </div>
      {/* {pagesCount > 1 && (
        <div id={styles.pagination}>
          <button
            id={styles.back}
            type="button"
            disabled={page === 1 || isChangingPage}
            onClick={() => handleChangePage(page - 1)}
          >
            back
          </button>
          <ul id={styles.pages}>
            {getPages(page, pagesCount).map((item, idx) => (
              <li
                key={idx}
                id={item === page ? styles.active : undefined}
                disabled={isChangingPage || item === page}
                onClick={() => handleChangePage(item)}
              >
                {item > 0 ? item : "..."}
              </li>
            ))}
          </ul>
          <button
            id={styles.next}
            type="button"
            disabled={page === pagesCount || isChangingPage}
            onClick={() => handleChangePage(page + 1)}
          >
            next
          </button>
        </div>
      )} */}
    </main>
  );
};

export default Gallery;
