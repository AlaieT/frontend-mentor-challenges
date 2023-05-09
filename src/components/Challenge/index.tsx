import React from "react";

import type { ChallengeProps } from "../../types";

import styles from "../../styles/components/challenge.module.scss";

const Challenge = ({ name, imgSrc, number, link }: ChallengeProps) => (
  <div className={styles.challenge}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={`preview ${name}`} />
      <div className={styles.name}>
        <p>{name}</p>
        <p>000-{number}</p>
      </div>
    </a>
  </div>
);

export default Challenge;
