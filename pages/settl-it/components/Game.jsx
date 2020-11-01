import React from 'react';
import styles from '../styles/settl.module.css';
import numberGenerator from '../helpers/numberGenerator';

const randomNumber = ({number}) => {

  return (
    <div className={styles.game}>
      {number}
    </div>
  );
};

export default randomNumber;