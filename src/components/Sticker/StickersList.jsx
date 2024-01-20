import { Sticker } from "./Sticker";
import { Choice } from "./Choice";
import React, { useState } from 'react';
import styles from './StickersList.module.css';

export function StickersList({ stickerData }) {
  const [selectedSticker, setSelectedSticker] = useState(null);

  const handleChange = (sticker) => {
    if (selectedSticker && selectedSticker.label === sticker.label) {
     
      return;
    }
    setSelectedSticker(sticker);
  };

  return (
    <div>
      <Choice selectedSticker={selectedSticker} />
      <ul className={styles['stickers-list']}>
        {stickerData.map((sticker) => (
          <Sticker
            key={sticker.label}
            handleChange={() => handleChange(sticker)}
            img={sticker.img}
            label={sticker.label}
          />
        ))}
      </ul>
    </div>
  );
}