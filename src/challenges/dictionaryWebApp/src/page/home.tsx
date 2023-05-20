import React from "react";

import Header from "../components/Header";

import type { Fonts, Modes } from "../types";

const Home = () => {
  const [font, setFont] = React.useState<Fonts>("Sans Serif");
  const [mode, setMode] = React.useState<Modes>("light");

  return (
    <Header font={font} mode={mode} handleFont={setFont} handleMode={setMode} />
  );
};

export default Home;
