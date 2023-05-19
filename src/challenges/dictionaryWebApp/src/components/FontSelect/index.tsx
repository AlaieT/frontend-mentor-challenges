import React from "react";

import { ReactComponent as ArrowDownIcon } from "../../assets/images/icon-arrow-down.svg";

import styles from "../../styles/components/fontSelect.module.scss";

const FontSelect = () => {
  const [currentFont, setFont] = React.useState("Sans Serif");
  const [isSelectFont, setSelectFont] = React.useState(false);

  return (
    <div id={styles.font}>
      <div id={styles["current-font"]} onClick={() => setSelectFont(true)}>
        <p>{currentFont}</p>
        <ArrowDownIcon width={12} height={6} />
      </div>
      <ul
        id={styles["select-font"]}
        hidden={!!isSelectFont}
        onMouseLeave={() => setSelectFont(false)}
      >
        <li onClick={() => setFont("Sans Serif")}>Sans Serif</li>
        <li onClick={() => setFont("Serif")}>Serif</li>
        <li onClick={() => setFont("Mono")}>Mono</li>
      </ul>
    </div>
  );
};

export default FontSelect;
