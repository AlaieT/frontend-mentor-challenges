import React from "react";

import { GlobalContext } from "../../utils/context";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";

import styles from "../../styles/components/header.module.scss";

const Header = () => {
  const globalContext = React.useContext(GlobalContext);

  return (
    <header>
      <LogoIcon width={32} height={36.5} />
      <div id={styles.controls}>
        <div id={styles.mode}>
          <MoonIcon width={20} height={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
