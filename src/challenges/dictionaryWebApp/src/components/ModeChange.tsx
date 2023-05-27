import React from "react";

import type { ModeChangeProps } from "../types";

import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";

import styles from "../styles/components/modeChange.module.scss";

const ModeChange = ({ callback = () => undefined, mode }: ModeChangeProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    callback(e.target.checked ? "dark" : "light");
  };

  return (
    <div id={styles.mode}>
      <label id={styles.switch} htmlFor={styles["mode-change"]}>
        <input
          id={styles["mode-change"]}
          type="checkbox"
          onChange={handleOnChange}
        />
        <span className={styles.slider} />
      </label>
      <MoonIcon
        width={20}
        height={20}
        id={styles["moon-icon"]}
        className={mode === "dark" ? styles.dark : undefined}
      />
    </div>
  );
};

export default ModeChange;
