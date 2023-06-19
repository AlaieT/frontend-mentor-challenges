import React, { useRef, useState } from "react";

import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";
import { ReactComponent as IconDelete } from "../assets/images/icon-delete.svg";
import { ReactComponent as IconSave } from "../assets/images/icon-save.svg";
import { ReactComponent as IconDocument } from "../assets/images/icon-document.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import styles from "../styles/components/header.module.scss";
import { HeaderProps } from "../types";

const Header = ({
  isMenuOpen,
  handleOpenMenu,
  handleDocumentName,
  documentName = "welcome.md",
  handleDelete,
  handleSave
}: HeaderProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [isNameChange, setIsNameChange] = useState(false);
  const handleIsNameChange = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    e.preventDefault();
    setIsNameChange((item) => !item);

    if (isNameChange) {
      handleDocumentName(nameInputRef.current?.value || "");
    }
  };

  return (
    <header id={styles.header}>
      <button id={styles["menu-button"]}>
        {isMenuOpen ? <IconClose /> : <IconMenu />}
      </button>
      <div id={styles.title}>
        <Logo />
      </div>
      <span id={styles.split} />
      <div id={styles["document-name"]}>
        <IconDocument/>
        <div id={styles["name-input"]}>
          <p>Document Name</p>
          <div id={styles["input-button-area"]}>
            {isNameChange ? (
              <input
                ref={nameInputRef}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                defaultValue={documentName}
                onBlur={handleIsNameChange}
              />
            ) : (
              <button onClick={handleIsNameChange}>{documentName}</button>
            )}
          </div>
        </div>
      </div>
      <button id={styles.delete}>
        <IconDelete />
      </button>
      <button id={styles.save}>
        <IconSave width={16} height={16} />
        <p>Save Changes</p>
      </button>
    </header>
  );
};

export default Header;
