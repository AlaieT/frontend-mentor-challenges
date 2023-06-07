import React from "react";

import styles from "../../styles/components/button.module.scss";

import type { ButtonProps } from "../../types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, ...rest }, ref) => (
    <button {...rest} ref={ref} type={type} className={styles.button}>
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
