import React from "react";

import Timer from "../Timer";

import type { LaunchCountdownTimerProps } from "../../types";

import { ReactComponent as IconFacebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as IconPinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../assets/images/icon-instagram.svg";

import styles from "../../styles/components/launchCountdownTimer.module.scss";

function LaunchCountdownTimer({
  deadline,
  title,
  links,
  background: { starsImage, hillsImage }
}: LaunchCountdownTimerProps) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <div id={styles.background}>
          <img src={starsImage} alt="bg-stars" />
          <img src={hillsImage} alt="bg-hills" />
        </div>
        <Timer deadline={deadline} />
      </main>
      <footer>
        <ul>
          <li>
            <a
              href={links.facebook}
              aria-label="facebook link"
              target="_blank"
              rel="noreferrer"
            >
              <IconFacebook />
            </a>
          </li>
          <li>
            <a
              href={links.pinterest}
              aria-label="pinterest link"
              target="_blank"
              rel="noreferrer"
            >
              <IconPinterest />
            </a>
          </li>
          <li>
            <a
              href={links.instagram}
              aria-label="instagram link"
              target="_blank"
              rel="noreferrer"
            >
              <IconInstagram />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default LaunchCountdownTimer;
