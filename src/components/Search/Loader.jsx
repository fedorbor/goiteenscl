import React from 'react';
import { Bars as LoaderSpinner } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderSpinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;