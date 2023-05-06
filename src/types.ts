export interface ChallengeProps {
  name: string;
  imgSrc: string;
}

export interface GalleryProps {
  challenges: Omit<ChallengeProps, "delay" | "disabled">[];
}
