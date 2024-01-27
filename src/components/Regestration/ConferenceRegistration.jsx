import React, { useState } from 'react';
import styles from './ConferenceRegistration.module.css'; 

const ConferenceRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    participantType: 'student',
    agree: false,
  });

  const handleChange = (event) => {
    console.log("1");
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.container}> 
      <h2>Conference Registration</h2>
      <form onSubmit={handleSubmit} className={styles.form}> 
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Participant Type:
          <input
            type="radio"
            name="participantType"
            value="student"
            checked={formData.participantType === 'student'}
            onChange={handleChange}
            required
          />
          Student
          <input
            type="radio"
            name="participantType"
            value="teacher"
            checked={formData.participantType === 'teacher'}
            onChange={handleChange}
            required
          />
          Teacher
        </label>

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          I agree to participate in the conference
        </label>

        <button type="submit" className={styles.button}> 
          Register
        </button>
      </form>
    </div> 
  );
};

export default ConferenceRegistration;
