import React from "react";

import Gallery from "../components/Gallery";

import "../styles/pages/index.module.scss";
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
  },
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
  },
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
  },
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
  },
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
        <p>
          This website contains my solution for Frontend Mentor challenges. All
          challenges made as individual web projects, so they include using of
          frameworks, linters, testing and e.t.c.
        </p>
      </header>
      <Gallery challenges={CHALLENGES} />
      <footer>Ilya「Alaie」Shafeev</footer>
    </>
  );
};

export { Page };
