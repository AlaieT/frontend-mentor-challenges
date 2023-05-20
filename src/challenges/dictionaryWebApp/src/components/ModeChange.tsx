import React from "react";

import type { ModeChangeProps } from "../types";

import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";

import styles from "../styles/components/modeChange.module.scss";

const ModeChange = ({ callback = () => undefined, mode }: ModeChangeProps) => (
  <div id={styles.mode}>
    <label id={styles.switch} htmlFor={styles["change-mode"]}>
      <input
        id={styles["change-mode"]}
        type="checkbox"
        onChange={(e) => {
          callback(e.target.checked ? "dark" : "light");
        }}
      />
      <span className={styles.slider} />
    </label>
    <MoonIcon
      width={20}
      height={20}
      id={styles["moon-icon"]}
      className={styles[mode]}
    />
  </div>
);

export default ModeChange;