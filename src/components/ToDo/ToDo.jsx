import React from 'react';
import styles from './ToDo.module.css';

function ToDo({ id, text, completed, onToggleComplete, onDelete }) {
  return (
    <li className={`${styles.todoItem} ${completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        className={styles.todoCheckbox}
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <p>{text}</p>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ToDo;
