import React from "react";

import Title from "../Title";

import styles from "../../styles/components/header.module.scss";
import Score from "../Score";

const Header = () => (
  <header>
    <ul id={styles.credentials}>
      <li>
        <p>Ilya「Alaie」Shafeev</p>
      </li>
      <li>
        <p>PROJECTS GALLERY</p>
      </li>
      <li>
        <p>©2023</p>
      </li>
    </ul>
    <Title sentence="frontend mentor—challenges" delay={50} />
    <ul id={styles.description}>
      <li>
        <p>
          This website contains my solutions for Frontend Mentor challenges.
        </p>
      </li>
      <li>
        <p>
          All challenges made as individual web projects, so they include using
          of frameworks, linters,
        </p>
      </li>
      <li>
        <p>
          testing and e.t.c. to make practice building websites in a realistic
          workflow.
        </p>
      </li>
      <li>
        <p>
          All of these challenges help improve skills and gain experience
          creating websites.
        </p>
      </li>
    </ul>
    <div id={styles.solved}>
      <Score score={25} delay={50} />
    </div>
  </header>
);

export default Header;