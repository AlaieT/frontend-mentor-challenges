// Components

export interface HeaderProps {
  isMenuOpen: boolean;
  handleOpenMenu: (isOpen: boolean) => void;

  documentName: string;
  handleDocumentName: (documentName: string) => void;

  handleDelete: () => void;
  handleSave: () => void;
}


interface Document {
  date: string;
  text: string;
}

export type Mode = "light" | "dark";

export interface MenuProps {
  myDocuments: { [x: string]: Document };
  mode: Mode;
  handleMode: (mode: Mode) => void;
}
