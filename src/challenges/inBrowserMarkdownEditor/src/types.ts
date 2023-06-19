// Components

export interface HeaderProps {
  isMenuOpen: boolean;
  handleOpenMenu: () => void;

  documentName: string;
  handleDocumentName: (documentName: string) => void;

  handleDelete: () => void;
  handleSave: () => void;
}
