import React from 'react';
import styles from './ContactList.module.css'; 

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles['contact-list']}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles['contact-item']}>
          <span>{contact.name}: {contact.number}</span>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;