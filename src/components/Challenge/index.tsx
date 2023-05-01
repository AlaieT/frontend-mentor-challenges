import React, { useState } from "react";

import { classNames } from "../../utils/classNames";

import type { ChallengeProps } from "../../types";

import { ReactComponent as ArrowOutward } from "../../assets/images/arrow_outward.svg";

import styles from "../../styles/components/challenge.module.scss";

const Challenge = ({
  delay, name, imgSrc, disabled
}: ChallengeProps) => {
  const [active, setActive] = useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActive((item) => !item), delay);
    return () => clearTimeout(timeout);
  }, [delay, disabled]);

  return (
    <div
      className={classNames({
        [styles.challenge]: true,
        [styles.active]: active
      })}
    >
      <div className={styles.preview}>
        <img src={imgSrc} alt={`preview ${name}`} />
      </div>
      <div className={styles.name}>
        <p>{name}</p>
        <ArrowOutward width={28} height={28} />
      </div>
    </div>
  );
};

export default Challenge;
