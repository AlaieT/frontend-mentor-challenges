import React from "react";

import styles from "../../styles/components/toggleSwitch.module.scss";

import type { ToggleSwitchProps } from "../../types";

const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ ...rest }, ref) => (
    <div className={styles.switch}>
      <input {...rest} ref={ref} type="checkbox" />
    </div>
  )
);

ToggleSwitch.displayName = "ToggleSwitch";

export default ToggleSwitch;
