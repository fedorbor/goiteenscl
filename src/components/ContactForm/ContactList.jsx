import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.listContainer}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.listItem}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;