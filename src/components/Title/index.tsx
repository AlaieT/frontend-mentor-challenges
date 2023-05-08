import React from "react";

import type { TitleProps } from "../../types";

import styles from "../../styles/components/title.module.scss";

const Title = ({ sentence, delay }: TitleProps) => {
  const splitText = React.useMemo(() => Array.from(sentence), [sentence]);
  const [count, setCount] = React.useState(-1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((item) => {
        if (item === sentence.length - 1) {
          clearInterval(interval);
          return item;
        }
        return item + 1;
      });
    }, delay);
    return () => clearInterval(interval);
  }, [sentence, splitText, delay]);

  return (
    <h1 id={styles.title}>
      {splitText.map((letter, idx) => (
        <span
          key={`title_${letter + idx}`}
          className={idx > count ? styles.disabled : undefined}
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </span>
      ))}
    </h1>
  );
};

export default Title;
