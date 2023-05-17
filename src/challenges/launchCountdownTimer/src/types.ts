export interface LaunchCountdownTimerProps {
  title: string;
  deadline: string;
  links: {
    facebook: string;
    pinterest: string;
    instagram: string;
  };
  background: {
    starsImage: string;
    hillsImage: string;
  };
}

export interface TimerProps {
  deadline: string;
}

export interface DigitProps {
  digit: number;
  label: string;
}
