import React from "react";

import Challenge from "../Challenge";

import type { GalleryProps } from "../../types";

import styles from "../../styles/components/gallery.module.scss";

function getChunkSize() {
  if (window !== undefined) {
    const chunkWidth = 425;
    const { innerWidth } = window;

    if (innerWidth >= chunkWidth * 4) return 4;
    if (innerWidth >= chunkWidth * 3) return 3;
    if (innerWidth >= chunkWidth * 2) return 2;

    return 1;
  }

  return 4;
}

function toChunks<T>(arr: T[], chunkSize: number) {
  const chunks: { key: number; chunk: T[] }[] = Array.from(
    { length: chunkSize },
    (_, idx) => ({
      key: idx,
      chunk: []
    })
  );

  for (let i = 0; i < arr.length; i += chunkSize) {
    arr
      .slice(i, i + chunkSize)
      .forEach((item, idx) => chunks[idx].chunk.push(item));
  }

  return chunks;
}

const Gallery = ({ challenges }: GalleryProps) => {
  const [chunkSize, setChunkSize] = React.useState(getChunkSize());
  const chunks = React.useMemo(
    () => toChunks(challenges, chunkSize),
    [challenges, chunkSize]
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setChunkSize(getChunkSize());
    });
  }, []);

  return (
    <main>
      <p id={styles.titleTag}>challenges</p>
      <div id={styles.challenges}>
        {chunks?.map(({ chunk, key }) => (
          <div key={`chunk_${key}`} className={styles.chunk}>
            {chunk.map(({ name, number, imgSrc, link }) => (
              <Challenge
                key={name}
                name={name}
                number={number}
                imgSrc={imgSrc}
                link={link}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
