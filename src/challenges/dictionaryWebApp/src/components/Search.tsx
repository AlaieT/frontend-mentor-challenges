import React from "react";

import classNames from "../utils/classNames";

import type { SearchProps } from "../types";

import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";

import styles from "../styles/components/search.module.scss";

const Search = ({
  value,
  mode,
  url,
  callback = () => undefined
}: SearchProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isError, setError] = React.useState(false);
  const [isSearch, setSearch] = React.useState(false);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (inputRef.current?.value) {
        if (isError) setError(false);
        if (window) window.scrollTo({ top: 0, behavior: "auto" });

        setSearch(true);

        fetch(url + inputRef.current.value, { method: "GET" })
          .then((response) => response.json())
          .then((result) => {
            setSearch(false);
            callback(result);
          })
          .catch(() => {
            setSearch(false);
            callback(null);
          });
      } else {
        setError(true);
        callback(null);
      }
    },
    [url, isError, callback]
  );

  React.useEffect(() => {
    if (value && inputRef.current) {
      if (window) window.scrollTo({ top: 0, behavior: "auto" });

      inputRef.current.value = value;

      setSearch(true);

      fetch(url + value, { method: "GET" })
        .then((response) => response.json())
        .then((result) => {
          setSearch(false);
          callback(result);
        })
        .catch(() => {
          setSearch(false);
          callback(null);
        });
    }
  }, [value, url, callback]);

  return (
    <form id={styles["search-form"]} onSubmit={handleSubmit}>
      <div
        id={styles.search}
        className={classNames({
          [styles[mode]]: mode === "dark",
          [styles.error]: isError,
          [styles.search]: isSearch
        })}
      >
        <input
          ref={inputRef}
          id="search-input"
          type="text"
          placeholder="Search for any word…"
          disabled={isSearch}
        />
        <button type="submit">
          <SearchIcon width={15.55} height={15.55} />
        </button>
      </div>
      {isError && (
        <label id={styles["label-error"]} htmlFor="search-input">
          Whoops, can’t be empty…
        </label>
      )}
    </form>
  );
};

export default Search;
