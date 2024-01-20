import styles from './Choice.module.css';

export function Choice({ selectedSticker }) {
  return (
    <div className={styles.choiceContainer}>
      {selectedSticker && (
        <>
          <p className={styles.choiceLabel}>{selectedSticker.label}</p>
          <img
            src={selectedSticker.img}
            alt={selectedSticker.label}
            className={styles.choiceImage}
          />
        </>
      )}
      {!selectedSticker && (
        <p className={styles.choice}>Make your choice:</p>
      )}
    </div>
  );
}
