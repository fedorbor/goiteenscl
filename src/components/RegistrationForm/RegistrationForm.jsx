import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваш код для обробки форми, наприклад, відправлення на сервер
    console.log('Відправлення форми:', formData);
  };

  return (
    <div className={styles.container}>
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Ім'я користувача:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <label htmlFor="email">Електронна пошта:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;