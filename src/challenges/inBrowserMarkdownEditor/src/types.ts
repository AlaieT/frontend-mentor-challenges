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

export interface MenuProps {
  myDocuments: { [x: string]: Document };
}
