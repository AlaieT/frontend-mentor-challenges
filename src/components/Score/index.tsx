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
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        strokeDasharray={310}
        strokeDashoffset={Math.floor(310 * (1 - count / score))}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <p>{count}</p>
    </div>
  );
};

export default Score;
