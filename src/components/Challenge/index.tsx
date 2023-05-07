import React from "react";

import type { ChallengeProps } from "../../types";

import styles from "../../styles/components/challenge.module.scss";

const Challenge = ({ name, imgSrc, number }: ChallengeProps) => (
  <div className={styles.challenge}>
    <img src={imgSrc} alt={`preview ${name}`} />
    <div className={styles.name}>
      <p>{name}</p>
      <p>000-{number}</p>
    </div>
  </div>
);

export default Challenge;
