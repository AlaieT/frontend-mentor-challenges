import React from "react";

import styles from "../styles/components/preview.module.scss";

import type { PreviewProps } from "../types";

const Header = ({
  type,
  children
}: {
  type: number;
  children: React.ReactNode;
}) => React.createElement(`h${type}`, {}, children);

const Preview = ({ markdown }: PreviewProps) => {
  return (
    <div id={styles.preview}>
      <div id={styles["preview-section-head"]}>MARKDOWN</div>
      <div id={styles["preview-data"]}>
        {markdown.map(({ type, subType, value }) => {
          switch (type) {
            case "header":
              return <Header type={subType || 1}>{value}</Header>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Preview;
