import React from "react";
import { NavLink } from "react-router-dom";

import classNames from "../utils/classNames";

import type { DefinitionProps } from "../types";

import styles from "../styles/components/definition.module.scss";

const Definition = ({
  mode,
  partOfSpeech,
  definitions,
  synonyms,
  antonyms
}: DefinitionProps) => (
  <section
    className={classNames({
      [styles.definition]: true,
      [styles.dark]: mode === "dark"
    })}
  >
    <h2>{partOfSpeech}</h2>
    <div className={styles.meanings}>
      <h3>Meaning</h3>
      <ul>
        {definitions.map(({ definition, example }) => (
          <li key={definition}>
            <p className={styles.meaning}>{definition}</p>
            {example && (
              <p className={styles.example}>
                &quot;
                {example}
                &quot;
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
    {!!synonyms.length && (
      <div className={styles["sym-ant"]}>
        <h3>Synonyms</h3>
        <ul>
          {synonyms.map((synonym) => (
            <li key={synonym}>
              <NavLink to={`/${synonym}`}>{synonym}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )}
    {!!antonyms.length && (
      <div className={styles["sym-ant"]}>
        <h3>Antonyms</h3>
        <ul>
          {antonyms.map((antonym) => (
            <li key={antonym}>
              <NavLink to={`/${antonym}`}>{antonym}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )}
  </section>
);

export default Definition;
