import React from "react";

import { ReactComponent as ArrowOutward } from "../../public/images/arrow_outward.svg";

import styles from "../styles/pages/index.module.scss";

import "../styles/global.scss";

const Page = () => {
  return (
    <>
      <header>
        <h1>frontend mentor challenges</h1>
      </header>
      <main>
        <div className={styles.challenge}>
          <img src="https://github.com/AlaieT/results-summary-component/raw/main/docs/1440x720_desktop.png" />
          <div className={styles.tags}>
            <ul>
              <li>#html</li>
              <li>#css</li>
            </ul>
            <p className={styles.newbie}>newbie</p>
          </div>
          <div className={styles.name}>
            <p>result summary component</p>
            <ArrowOutward width={28} height={28} />
          </div>
        </div>
        <div className={styles.challenge}>
          <img src="https://github.com/AlaieT/multi-step-form/raw/main/docs/screenshot.png" />
          <div className={styles.tags}>
            <ul>
              <li>#html</li>
              <li>#css</li>
              <li>#js</li>
            </ul>
            <p className={styles.advanced}>advanced</p>
          </div>
          <div className={styles.name}>
            <p>multi step form</p>
            <ArrowOutward width={28} height={28} />
          </div>
        </div>
        <div className={styles.challenge}>
          <img src="https://github.com/AlaieT/launch-countdown-timer/raw/master/docs/screenshot_desktop.png" />
          <div className={styles.tags}>
            <ul>
              <li>#html</li>
              <li>#css</li>
              <li>#js</li>
            </ul>
            <p className={styles.intermediate}>intermediate</p>
          </div>
          <div className={styles.name}>
            <p>launch countdown timer</p>
            <ArrowOutward width={28} height={28} />
          </div>
        </div>
      </main>
      <footer>Ilya「Alaie」Shafeev</footer>
    </>
  );
};

export { Page };
