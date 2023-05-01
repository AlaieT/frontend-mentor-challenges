export interface ChallengeProps {
  delay: number;
  name: string;
  imgSrc: string;
  disabled: boolean;
}

export interface GalleryProps {
  challenges: Omit<ChallengeProps, "delay" | "disabled">[];
}
