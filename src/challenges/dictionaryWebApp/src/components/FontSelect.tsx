import React, { useState, useCallback } from "react";

import { ReactComponent as ArrowDownIcon } from "../assets/images/icon-arrow-down.svg";
import styles from "../styles/components/fontSelect.module.scss";

import type { FontSelectProps, Fonts } from "../types";

const FontSelect = ({
  callback = () => undefined,
  font,
  mode
}: FontSelectProps) => {
  const [isSelectFont, setIsSelectFont] = useState(false);
  const handleSetFont = useCallback(
    (newFont: Fonts) => {
      setIsSelectFont(false);
      callback(newFont);
    },
    [callback]
  );

  return (
    <div id={styles.font} className={mode === "dark" ? styles.dark : undefined}>
      <button
        id={styles["current-font"]}
        onClick={() => setIsSelectFont((item) => !item)}
      >
        <p>{font}</p>
        <ArrowDownIcon width={12} height={6} />
      </button>
      {isSelectFont ? (
        <ul id={styles["select-font"]}>
          <li>
            <button
              className={styles.inter}
              onClick={() => handleSetFont("Sans Serif")}
            >
              Sans Serif
            </button>
          </li>
          <li>
            <button
              className={styles.lora}
              onClick={() => handleSetFont("Serif")}
            >
              Serif
            </button>
          </li>
          <li>
            <button
              className={styles.inconsolata}
              onClick={() => handleSetFont("Mono")}
            >
              Mono
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default FontSelect;
