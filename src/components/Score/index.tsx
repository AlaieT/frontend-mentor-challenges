import React from "react";

import type { ScoreProps } from "../../types";

import styles from "../../styles/components/score.module.scss";

const Score = ({ score, delay }: ScoreProps) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((item) => {
        if (item === score) {
          clearInterval(interval);
          return item;
        }
        return item + 1;
      });
    }, delay);
    return () => clearInterval(interval);
  }, [score, delay]);

  return (
    <div id={styles.score}>
      <p>
        <span>{count}</span>&nbsp;&#8212;&nbsp;completed 
      </p>
    </div>
  );
};

export default Score;
