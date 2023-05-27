import React from "react";

import FontSelect from "./FontSelect";
import ModeChange from "./ModeChange";

import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";

import type { HeaderProps } from "../types";

import styles from "../styles/components/header.module.scss";

const Header = ({
  font,
  mode,
  handleFont = () => undefined,
  handleMode = () => undefined
}: HeaderProps) => (
  <header id={styles.header}>
    <LogoIcon width={32} height={36.5} />
    <div id={styles.controls}>
      <FontSelect callback={handleFont} font={font} mode={mode} />
      <span id={styles.separate} />
      <ModeChange callback={handleMode} mode={mode} />
    </div>
  </header>
);

export default Header;
