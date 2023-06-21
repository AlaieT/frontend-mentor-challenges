import React, { useMemo } from "react";

import { ReactComponent as IconDocument } from "../assets/images/icon-document.svg";
import styles from "../styles/components/menu.module.scss";

import type { MenuProps } from "../types";

const Menu = ({ myDocuments }: MenuProps) => {
  const myDocumentsList = useMemo(
    () =>
      Object.keys(myDocuments).map((key) => ({
        name: key,
        date: myDocuments[key].date
      })),
    [myDocuments]
  );

  return (
    <div id={styles.menu}>
      <div id={styles["menu-header"]}>MY DOCUMENTS</div>
      <div id={styles["menu-body"]}>
        <button id={styles["new-document"]}>+ New Document</button>
        <nav id={styles.documents}>
          <ul>
            {myDocumentsList.map(({ name, date }) => (
              <li key={name}>
                <IconDocument />
                <p>{date}</p>
                <p>{name}.md</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
