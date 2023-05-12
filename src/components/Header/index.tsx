import React from "react";

import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow_outward.svg";
import styles from "../../styles/components/header.module.scss";

const Header = () => (
  <header id={styles.header}>
    <div id={styles.author}>
      <p>ilya [alaie] shafeev</p>
      <p>©2023</p>
    </div>
    <div id={styles.greetings}>
      <div id={styles.title}>
        <p>front-end mentor</p>
        <p>challenges</p>
      </div>
      <div id={styles.description}>
        <p>
          This website contains my solutions for Frontend Mentor challenges. All
          challenges made as individual web projects, so they include using of
          frameworks, linters, testing and e.t.c. to make practice building
          websites in a realistic workflow. All of these challenges help improve
          skills and gain experience creating websites.
        </p>
      </div>
      <a id={styles.github} href="/" target="_blank" rel="noopener noreferrer">
        <GitHubIcon width={20} height={20} />
        GITHUB
        <ArrowIcon width={20} height={20} />
      </a>
    </div>
  </header>
);

export default Header;
