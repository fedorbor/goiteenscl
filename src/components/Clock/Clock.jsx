import React, { useState, useEffect } from "react";
import styles from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('Це інтервал кожні 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    setIntervalId(id);

    return () => {
      console.log('Цей метод викликається перед кожним розмонтуванням компоненту');
      clearInterval(id);
    };
  }, []); 

  const stop = () => {
    clearInterval(intervalId);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Поточний час:
        <br />
        {time.toLocaleTimeString()}
      </p>
      <br />
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
};

export default Clock;
