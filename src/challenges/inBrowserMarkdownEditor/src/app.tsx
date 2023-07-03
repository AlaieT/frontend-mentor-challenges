import React, { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Markdown from "./components/Markdown";
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
        <Markdown />
      </div>
    </div>
  );
};

export default App;
