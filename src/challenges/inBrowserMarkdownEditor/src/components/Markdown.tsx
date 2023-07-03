import React from "react";

import styles from "../styles/components/markdown.module.scss";

const Markdown = () => {
  return (
    <div id={styles.markdown}>
      <div id={styles["markdown-section-head"]}>MARKDOWN</div>
      <textarea />
    </div>
  );
};

export default Markdown;
