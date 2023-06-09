import React from "react";

import styles from "../../styles/components/button.module.scss";

import type { ButtonProps } from "../../types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", ...rest }, ref) => (
    <button {...rest} type={type} ref={ref} className={styles.button}>
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
