import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import styles from './ToDoList.module.css';
import todosData from '../toDo.json';

export function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todosData);
  }, []);

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAdd = (text) => {
    if (todos.some((todo) => todo.text === text)) {
      alert('ToDo with this text already exists!');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <ToDoForm onAdd={handleAdd} />
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggleComplete={handleToggleComplete}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}