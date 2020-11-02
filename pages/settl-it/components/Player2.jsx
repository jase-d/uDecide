import React from 'react';
import styles from '../styles/settl.module.css';

import Player2Info from './Player2Info.jsx';

export default class Player2 extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={styles.playerContainer}>
        <Player2Info />
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