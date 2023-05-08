export interface ChallengeProps {
  name: string;
  number: number;
  imgSrc: string;
}

export interface GalleryProps {
  challenges: Omit<ChallengeProps, "delay" | "disabled">[];
}

export interface TitleProps {
  sentence: string;
  delay: number;
}

export interface ScoreProps {
  score: number;
  delay: number;
}
