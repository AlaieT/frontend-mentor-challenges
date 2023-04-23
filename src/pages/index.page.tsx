import React from "react";

import Challenge from "../components/Challenge";

import styles from "../styles/pages/index.module.scss";

import "../styles/global.scss";

const CHALLENGES = [
  {
    name: "result summary component",
    imgSrc:
      "https://github.com/AlaieT/results-summary-component/raw/main/docs/1440x720_desktop.png"
  },
  {
    name: "multi step form",
    imgSrc:
      "https://github.com/AlaieT/multi-step-form/raw/main/docs/screenshot.png"
  },
  {
    name: "launch countdown timer",
    imgSrc:
      "https://github.com/AlaieT/launch-countdown-timer/raw/master/docs/screenshot_desktop.png"
  }
];

const Page = () => {
  return (
    <>
      <header>
        <h1>
          frontend mentor
          <span />
          challenges
        </h1>
      </header>
      <main>
        <div id={styles.challenges}>
          {CHALLENGES.map(({ name, imgSrc }, idx) => (
            <Challenge
              key={name}
              delay={350 * idx}
              name={name}
              imgSrc={imgSrc}
            />
          ))}
        </div>
      </main>
      <footer>Ilya「Alaie」Shafeev</footer>
    </>
  );
};

export { Page };
