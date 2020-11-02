import React from 'react';
import styles from '../styles/settl.module.css';

import Player1Info from './Player1Info';

export default class Player1 extends React.Component {
  constructor(props) {
    super(props);

    this.confirm = this.confirm.bind(this);
  };

  confirm() {
    const inputs = document.getElementsByClassName(styles.player1Picks);
    const values = Array.from(inputs).map((input) => Number(input.value));
    console.log(inputs, values);
  }

  render() {
    return (
      <div className={styles.playerContainer}>
        <Player1Info />
        <div></div>
        <div className={styles.playerInput}>
          <div>
            <p>Guess Four Digits</p>
            <p>1-9 Each</p>
          </div>
          <div>
            <input className={styles.player1Picks} type="number"></input><input className={styles.player1Picks} type="number"></input><input className={styles.player1Picks} type="number"></input><input className={styles.player1Picks} type="number"></input>
          </div>
          <button onClick={this.confirm}>CONFIRM</button>
        </div>
      </div>
    );
  };
};