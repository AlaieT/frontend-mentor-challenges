import React, { useState, useCallback } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Definition from "../components/Definition";
import Audio from "../components/Audio";
import classNames from "../utils/classNames";

import type { Fonts, Modes, WordDefinition, BadResponse } from "../types";

import { ReactComponent as NewWindowIcon } from "../assets/images/icon-new-window.svg";

import styles from "../styles/pages/home.module.scss";

const isDefinition = (value: unknown): value is WordDefinition =>
  !!(value && (value as WordDefinition).word);
const isBadResponse = (value: unknown): value is BadResponse =>
  !!(value && (value as BadResponse).title);

const Home = () => {
  const [font, setFont] = useState<Fonts>("Sans Serif");
  const [mode, setMode] = useState<Modes>("light");
  const [definition, setDefinition] = useState<
    WordDefinition | BadResponse | null
  >(null);

  const handleSetDefinition = useCallback(
    (value: any) => {
      if (value) {
        const valueDefinition = value[0];

        if (isDefinition(valueDefinition)) {
          const phonetics = valueDefinition.phonetics.filter(
            (item) => !!(item.audio && item.text)
          );

          if (phonetics.length > 0) valueDefinition.phonetics = phonetics;

          setDefinition(valueDefinition);
        }
        if (isBadResponse(value)) setDefinition(value);
      } else setDefinition(null);
    },
    [setDefinition]
  );

  return (
    <div
      id={styles.content}
      className={classNames({
        [styles.dark]: mode === "dark",
        [styles[font.toLowerCase().replace(" ", "-")]]: true
      })}
    >
      <Header
        font={font}
        mode={mode}
        handleFont={setFont}
        handleMode={setMode}
      />
      <main>
        <Search
          mode={mode}
          url="https://api.dictionaryapi.dev/api/v2/entries/en/"
          callback={handleSetDefinition}
        />
        {isDefinition(definition) && (
          <>
            <div id={styles.word}>
              <div id={styles.text}>
                <p>{definition.word}</p>
                <p>{definition.phonetics[0].text || ""}</p>
              </div>
              <Audio src={definition.phonetics[0].audio} />
            </div>
            <div id={styles.meanings}>
              {definition.meanings.map((item, idx) => (
                <Definition
                  key={`${item.partOfSpeech}_${definition.meanings[idx].definitions[0].definition}`}
                  mode={mode}
                  partOfSpeech={item.partOfSpeech}
                  definitions={item.definitions}
                  synonyms={item.synonyms}
                  antonyms={item.antonyms}
                />
              ))}
            </div>
            <div id={styles.source}>
              <p>Source</p>
              <a
                href={definition.sourceUrls[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {definition.sourceUrls}
                <NewWindowIcon width={12} height={12} />
              </a>
            </div>
          </>
        )}
        {isBadResponse(definition) && (
          <section id={styles["not-found"]}>
            😕
            <h2>No Definitions Found</h2>
            <p>
              Sorry pal, we couldn&apos;t find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
