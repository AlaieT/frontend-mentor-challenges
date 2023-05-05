import React from "react";

import Challenge from "../Challenge";

import type { GalleryProps } from "../../types";

import styles from "../../styles/components/gallery.module.scss";

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
  const chunks = React.useMemo(() => toChunks(challenges, 4), [challenges]);

  return (
    <main>
      <div id={styles.challenges}>
        {chunks.map(({ chunk, key }) => (
          <div key={`chunk_${key}`} className={styles.chunk}>
            {chunk.map(({ name, imgSrc }) => (
              <Challenge key={name} name={name} imgSrc={imgSrc} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
