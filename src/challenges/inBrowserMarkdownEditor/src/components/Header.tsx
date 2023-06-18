import React from "react";

import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";
import { ReactComponent as IconDelete } from "../assets/images/icon-delete.svg";
import { ReactComponent as IconSave } from "../assets/images/icon-save.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import styles from "../styles/header.component.module.scss";
import { HeaderProps } from "../types";

const Header = ({ isMenuOpen }: HeaderProps) => (
  <header id={styles.header}>
    <button id={styles["menu-button"]}>
      {isMenuOpen ? <IconClose /> : <IconMenu />}
    </button>
    <div id={styles.title}>
      <Logo />
    </div>
    <span id={styles.split} />
    <div id={styles["document-name"]}></div>
    <button id={styles.delete}>
      <IconDelete />
    </button>
    <button id={styles.save}>
      <IconSave width={16} height={16} />
      <p>Save Changes</p>
    </button>
  </header>
);

export default Header;
