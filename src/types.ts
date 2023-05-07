export interface ChallengeProps {
  name: string;
  number:number;
  imgSrc: string;
}

export interface GalleryProps {
  challenges: Omit<ChallengeProps, "delay" | "disabled">[];
}
