import React from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Definition from "../components/Definition";
import classNames from "../utils/classNames";

import type { Fonts, Modes, WordDefinition, BadResponse } from "../types";

import styles from "../styles/pages/home.module.scss";

const isDefinition = (value: unknown): value is WordDefinition =>
  !!(value && (value as WordDefinition).word);
const isBadResponse = (value: unknown): value is BadResponse =>
  !!(value && (value as BadResponse).title);

const Home = () => {
  const [font, setFont] = React.useState<Fonts>("Sans Serif");
  const [mode, setMode] = React.useState<Modes>("light");
  const [searchValue, setSearchValue] = React.useState<string | undefined>(
    undefined
  );
  const [definition, setDefinition] = React.useState<
    WordDefinition | BadResponse | null
  >(null);

  const handleSetDefinition = React.useCallback(
    (value: any) => {
      if (value) {
        if (isDefinition(value[0])) setDefinition(value[0]);
        if (isBadResponse(value)) setDefinition(value);
      } else setDefinition(null);
    },
    [setDefinition]
  );

  return (
    <div
      id={styles.content}
      className={classNames({
        [styles[mode]]: mode === "dark",
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
          value={searchValue}
          mode={mode}
          url="https://api.dictionaryapi.dev/api/v2/entries/en/"
          callback={handleSetDefinition}
        />
        {isDefinition(definition) && (
          <>
            <div id={styles.meanings}>
              {definition.meanings.map((item) => (
                <Definition
                  key={item.partOfSpeech}
                  redirectSearch={setSearchValue}
                  mode={mode}
                  partOfSpeech={item.partOfSpeech}
                  definitions={item.definitions}
                  synonyms={item.synonyms}
                  antonyms={item.antonyms}
                />
              ))}
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
