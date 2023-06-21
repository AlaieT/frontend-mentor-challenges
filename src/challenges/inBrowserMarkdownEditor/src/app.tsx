import React, { useState } from "react";

import Header from "./components/Header";
import "./styles/global.scss";
import Menu from "./components/Menu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [documents, setDocuments] = useState(null);
  const [currentDocument, setCurrentDocument] = useState(null);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} handleOpenMenu={setIsMenuOpen} />
      {isMenuOpen ? (
        <Menu
          myDocuments={{
            "untitled-document": { date: "01 April 2022", text: "" },
            welcome: { date: "01 April 2022", text: "" }
          }}
        />
      ) : null}
    </>
  );
};

export default App;
