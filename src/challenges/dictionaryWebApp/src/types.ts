export type Modes = "light" | "dark";
export type Fonts = "Sans Serif" | "Serif" | "Mono";

export interface GlobalContextProps {
  mode: Modes;
  font: Fonts;
  setMode: (mode: Modes) => void;
  setFont: (font: Fonts) => void;
}

export interface FontSelectProps {
  callback?: (font: Fonts) => void;
  font: Fonts;
  mode: Modes;
}

export interface ModeChangeProps {
  callback?: (mode: Modes) => void;
  mode: Modes;
}

export interface HeaderProps {
  font: Fonts;
  mode: Modes;
  handleFont?: (font: Fonts) => void;
  handleMode?: (mode: Modes) => void;
}

export interface WordDefinition {
  word: string;
  phonetics: { text: string | undefined; audio: string | undefined }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  sourceUrls: string[];
}

export interface BadResponse {
  title: string;
  message: string;
  resolution: string;
}

export interface SearchProps {
  mode: Modes;
  url: string;
  callback?: (result: WordDefinition[] | null) => void;
}

export interface DefinitionProps {
  mode: Modes;
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
}

export interface AudioProps {
  src?: string;
}
