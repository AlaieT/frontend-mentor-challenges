import React, { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";
import styles from "./styles/app.module.scss";
import "./styles/global.scss";

import type { Mode } from "./types";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("light");

  return (
    <div id={styles["wrap"]}>
      {isMenuOpen ? (
        <Menu
          mode={mode}
          handleMode={setMode}
          myDocuments={{
            "untitled-document": { date: "01 April 2022", text: "" },
            welcome: { date: "01 April 2022", text: "" }
          }}
        />
      ) : null}
      <div id={styles["inner-part"]}>
        <Header isMenuOpen={isMenuOpen} handleOpenMenu={setIsMenuOpen} />
        <div id={styles["markdown-preview"]}>
          <Markdown />
          <Preview
            markdown={[
              { type: "header", subType: 1, value: "Header1" },
              { type: "header", subType: 2, value: "Header2" },
              { type: "header", subType: 3, value: "Header3" },
              { type: "header", subType: 4, value: "Header4" },
              { type: "header", subType: 5, value: "Header5" },
              { type: "header", subType: 6, value: "Header6" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
