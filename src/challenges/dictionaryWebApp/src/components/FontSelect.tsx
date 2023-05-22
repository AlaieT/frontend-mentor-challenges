import React from "react";

import type { FontSelectProps, Fonts } from "../types";

import { ReactComponent as ArrowDownIcon } from "../assets/images/icon-arrow-down.svg";

import styles from "../styles/components/fontSelect.module.scss";

const FontSelect = ({ callback = () => undefined, font, mode }: FontSelectProps) => {
  const [isSelectFont, setSelectFont] = React.useState(false);
  const handleSetFont = React.useCallback(
    (newFont: Fonts) => {
      setSelectFont(false);
      callback(newFont);
    },
    [callback]
  );

  return (
    <div id={styles.font} className={styles[mode]} onMouseLeave={() => setSelectFont(false)}>
      <div id={styles["current-font"]} onClick={() => setSelectFont(true)}>
        <p>{font}</p>
        <ArrowDownIcon width={12} height={6} />
      </div>
      {isSelectFont && (
        <ul
          id={styles["select-font"]}
        >
          <li
            className={styles.inter}
            onClick={() => handleSetFont("Sans Serif")}
          >
            Sans Serif
          </li>
          <li
            className={styles.lora}
            onClick={() => handleSetFont("Serif")}
          >
            Serif
          </li>
          <li
            className={styles.inconsolata}
            onClick={() => handleSetFont("Mono")}
          >
            Mono
          </li>
        </ul>
      )}
    </div>
  );
};

export default FontSelect;
