import styles from './Sticker.module.css';

export function Sticker({ img, label, handleChange }) {
  return (
    <li className={styles.sticker} onClick={() => { handleChange(label) }}>
      <img src={img} alt="" />
      <p>{label}</p>
    </li>
  );
}