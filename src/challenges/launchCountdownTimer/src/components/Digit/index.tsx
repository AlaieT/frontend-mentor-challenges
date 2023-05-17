import React, { useEffect, useState } from "react";

import type { DigitProps } from "../../types";

import styles from "../../styles/components/digit.module.scss";
import classNames from "../../utils/classNames";

function Digit({ label, digit }: DigitProps) {
  const [lastDigit, setLastDigit] = useState(digit);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (lastDigit !== digit) {
      setIsAnimated((item) => !item);

      const timeout = setTimeout(() => {
        setIsAnimated((item) => !item);
        setLastDigit(digit);
        clearTimeout(timeout);
      }, 500);

      return () => clearTimeout(timeout);
    }

    return () => undefined;
  }, [digit, lastDigit]);

  return (
    <div className={styles.digit}>
      <div className={styles.box}>
        <div className={styles.top}>
          <p>
            {digit < 10 && "0"}
            {digit}
          </p>
        </div>
        <div
          className={classNames({
            [styles.middle]: true,
            [styles.animated]: isAnimated
          })}
        >
          <div className={styles.front}>
            <p>
              {lastDigit < 10 && "0"}
              {lastDigit}
            </p>
          </div>
          <div className={styles.back}>
            <p>
              {digit < 10 && "0"}
              {digit}
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            {lastDigit < 10 && "0"}
            {lastDigit}
          </p>
        </div>
      </div>
      <div className={styles.label}>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default Digit;
