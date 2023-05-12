import React from "react";

import type { ChallengeProps } from "../../types";

import { ReactComponent as ArrowIcon } from "../../assets/images/arrow_outward.svg";

import styles from "../../styles/components/challenge.module.scss";

const Challenge = ({ name, link }: ChallengeProps) => (
  <a
    className={styles.challenge}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>{name}</p>
    <div className={styles.arrow}>
      <ArrowIcon width={24} height={24} />
    </div>
  </a>
);

export default Challenge;
