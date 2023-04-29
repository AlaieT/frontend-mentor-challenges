export interface ChallengeProps {
  delay: number;
  name: string;
  imgSrc: string;
}

export interface GalleryProps {
  challenges: Omit<ChallengeProps, "delay">[];
}
