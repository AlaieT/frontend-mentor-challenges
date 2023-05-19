type Modes = "light" | "dark";
type Fonts = "Sans Serif" | "Serif" | "Mono";

export interface GlobalContextProps {
  mode: Modes;
  font: Fonts;
  setMode: (mode: Modes) => void;
  setFont: (font: Fonts) => void;
}

export interface WordDefinition {
  word: string;
  phonetics: { text: string | undefined; audio: string | undefined }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  sourceUrls: string[];
}
