import React from "react";

import type { GlobalContextProps } from "../types";

const GlobalContext = React.createContext<GlobalContextProps>({
  mode: "light",
  font: "Sans Serif",
  setMode(mode) {
    this.mode = mode;
  },
  setFont(font) {
    this.font = font;
  }
});

export { GlobalContext };
