import React, { useState } from "react";

import type { ChallengeProps } from "../../types";

import { ReactComponent as ArrowOutward } from "../../../public/images/arrow_outward.svg";

import styles from "../../styles/components/challenge.module.scss";
import { classNames } from "../../utils/classNames";

const Challenge = ({ delay, name, imgSrc }: ChallengeProps) => {
  const [active, setActive] = useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActive((item) => !item), delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={classNames({
        [styles.challenge]: true,
        [styles.active]: active
      })}
    >
      <div className={styles.preview}>
        <img src={imgSrc} alt={"preview " + name} />
      </div>
      <div className={styles.name}>
        <p>{name}</p>
        <ArrowOutward width={28} height={28} />
      </div>
    </div>
  );
};

export default Challenge;
