import React, { useState } from 'react';
import styles from './ToDoForm.module.css';

function ToDoForm({ onAdd }) {
  const [newToDo, setNewToDo] = useState('');

  const handleInputChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newToDo.trim() === '') {
      return; 
    }

    onAdd(newToDo);
    setNewToDo('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add a new ToDo..."
        value={newToDo}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.addButton}>
        Add
      </button>
    </form>
  );
}
export default ToDoForm;
