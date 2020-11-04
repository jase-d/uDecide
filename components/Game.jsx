import React from 'react';
import styles from '../styles/settl.module.css';

const randomNumber = ({number}) => {

  return (
    <div className={styles.game}>
      {number}
    </div>
  );
};

export default randomNumber;