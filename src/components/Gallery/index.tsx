import React from "react";

import Challenge from "../Challenge";
import getPages from "../../utils/getPages";

import type { GalleryProps } from "../../types";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";

import styles from "../../styles/components/gallery.module.scss";

const ON_PAGE = 6;

const Gallery = ({ challenges }: GalleryProps) => {
  const pagesCount = React.useMemo(
    () => Math.ceil(challenges.length / ON_PAGE),
    [challenges]
  );
  const [page, setPage] = React.useState(1);
  const [isChangingPage, setIsChangingPage] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState("");
  const inputRef = React.useRef<null | HTMLInputElement>(null);

  const handleChangePage = (pageNumber: number) => {
    if (!isChangingPage) {
      setTimeout(() => {
        setIsChangingPage((item) => !item);
        setPage(pageNumber);
      }, 1900);
      setIsChangingPage((item) => !item);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setIsChangingPage((item) => !item);
      setFilterValue(inputRef.current?.value || "");
    }, 1900);
    setIsChangingPage((item) => !item);
  };

  return (
    <main>
      <form id={styles.filter} onSubmit={handleOnSubmit}>
        <SearchIcon width={20} height={20} />
        <input type="text" placeholder="Challenge name" ref={inputRef} />
      </form>
      <div id={styles.challenges}>
        {challenges
          .filter((item) => !!RegExp(filterValue).exec(item.name))
          .slice((page - 1) * ON_PAGE, page * ON_PAGE)
          .map(({ name, imgSrc }, idx) => (
            <Challenge
              key={name}
              delay={200 * (idx - (page - 1) * ON_PAGE)}
              name={name}
              imgSrc={imgSrc}
              disabled={isChangingPage}
            />
          ))}
      </div>
      {pagesCount > 1 && (
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
      )}
    </main>
  );
};

export default Gallery;
