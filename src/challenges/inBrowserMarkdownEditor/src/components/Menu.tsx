import React, { useMemo } from "react";

import { ReactComponent as IconDocument } from "../assets/images/icon-document.svg";
import { ReactComponent as IconDarkMode } from "../assets/images/icon-dark-mode.svg";
import { ReactComponent as IconLightMode } from "../assets/images/icon-light-mode.svg";
import styles from "../styles/components/menu.module.scss";

import type { MenuProps } from "../types";

const Menu = ({ myDocuments, mode, handleMode }: MenuProps) => {
  const myDocumentsList = useMemo(
    () =>
      Object.keys(myDocuments).map((key) => ({
        name: key,
        date: myDocuments[key].date
      })),
    [myDocuments]
  );

  return (
    <nav id={styles.menu}>
      <div id={styles["menu-body"]}>
        <div id={styles["menu-title"]}>MY DOCUMENTS</div>
        <button id={styles["new-document"]}>+ New Document</button>
        <ul id={styles.documents}>
          {myDocumentsList.map(({ name, date }) => (
            <li key={name}>
              <IconDocument />
              <p>{date}</p>
              <p>{name}.md</p>
            </li>
          ))}
        </ul>
      </div>
      <div id={styles["mode-controls"]}>
        <IconDarkMode />
        <label id={styles["toggle-switch"]}>
          <input
            type="checkbox"
            defaultChecked
            onChange={() => handleMode(mode === "light" ? "dark" : "light")}
          />
          <span />
        </label>
        <IconLightMode />
      </div>
    </nav>
  );
};

export default Menu;
