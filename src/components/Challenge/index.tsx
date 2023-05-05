import React from "react";


import type { ChallengeProps } from "../../types";

import styles from "../../styles/components/challenge.module.scss";

const Challenge = ({ name, imgSrc }: ChallengeProps) => (
  <div className={styles.challenge}>
    <img src={imgSrc} alt={`preview ${name}`} />
    <div className={styles.name}>
      <p>{name}</p>
    </div>
  </div>
);

export default Challenge;
