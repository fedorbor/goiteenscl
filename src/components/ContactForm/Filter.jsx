import React from 'react';
import styles from './Filter.module.css'; 

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={e => setFilter(e.target.value)}
      className={styles['filter-input']}
    />
  );
};

export default Filter;