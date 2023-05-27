import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classNames from "../utils/classNames";

import type { SearchProps } from "../types";

import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";

import styles from "../styles/components/search.module.scss";

const Search = ({ mode, url, callback = () => undefined }: SearchProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isError, setError] = React.useState(false);
  const [isSearch, setSearch] = React.useState(false);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (inputRef.current?.value) {
        if (isError) setError(false);

        navigate(`/${inputRef.current?.value}`);
      } else {
        setError(true);
        callback(null);
      }
    },
    [isError, callback, navigate]
  );

  React.useEffect(() => {
    const pathname = location.pathname.split("/")[1] || "";

    if (inputRef.current && pathname) {
      inputRef.current.value = pathname;

      setSearch(true);

      fetch(url + pathname, { method: "GET" })
        .then((response) => response.json())
        .then((result) => callback(result))
        .catch(() => callback(null))
        .finally(() => {
          window.scrollTo({ top: 0, behavior: "auto" });
          setSearch(false);
        });
    }
  }, [url, callback, location]);

  return (
    <form id={styles["search-form"]} onSubmit={handleSubmit}>
      <div
        id={styles.search}
        className={classNames({
          [styles.dark]: mode === "dark",
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
        <button type="submit" disabled={isSearch}>
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
