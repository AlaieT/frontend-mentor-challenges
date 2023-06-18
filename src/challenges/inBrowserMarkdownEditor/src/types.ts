// Components

export interface HeaderProps {
  isMenuOpen: boolean;
  handleOpenMenu: () => void;

  documentName: string;
  handleDocumentName: () => void;

  handleDelete: () => void;
  handleSave: () => void;
}
