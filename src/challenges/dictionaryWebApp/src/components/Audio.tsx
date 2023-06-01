import React, { useRef } from "react";

import type { AudioProps } from "../types";

import { ReactComponent as PlayIcon } from "../assets/images/icon-play.svg";

import styles from "../styles/components/audio.module.scss";

const Audio = ({ src }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.code === "Space") audioRef.current?.play();
  };

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    audioRef.current?.play();
  };

  return (
    <div
      id={styles.audio}
      role="button"
      tabIndex={0}
      onClick={handleOnClick}
      onKeyDown={handleKeyDown}
    >
      <PlayIcon />
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Audio;
