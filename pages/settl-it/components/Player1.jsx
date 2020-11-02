import React from 'react';
import styles from '../styles/settl.module.css';

import Player1Info from './Player1Info';

export default class Player1 extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={styles.playerContainer}>
        <Player1Info />
        <div></div>
        <div className={styles.playerInput}>
          <div>Guess Four Digits
            1-9
          </div>
          <div>
            <input className={styles.playerPicks} type="number"></input><input className={styles.playerPicks} type="number"></input><input className={styles.playerPicks} type="number"></input><input className={styles.playerPicks} type="number"></input>
          </div>
        </div>
      </div>
    );
  };
};