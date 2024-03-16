import React, { useState, useEffect } from "react";
import './Form.module.css';

export const Form = () => {
  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [password, setPassword] = useState(() => localStorage.getItem('password') || '');

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('password', password);
  }, [password]);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, password });
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};