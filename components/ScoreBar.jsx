import React from 'react';
import styles from '../styles/settl.module.css';

const ScoreBoard = ({score1, score2}) => {
  return (
    <div className={styles.scoreBar}>
      <div id={styles.score1}>{score1}</div>
      <div id={styles.scoreLogo}>SCORE BOARD</div>
      <div id={styles.score2}>{score2}</div>
    </div>
  );
};

export default ScoreBoard;