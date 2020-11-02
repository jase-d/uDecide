import React from 'react';
import styles from '../styles/settl.module.css';

import dynamic from 'next/dynamic';
const App = dynamic(import('../app.jsx'));

import Player1Info from './Player1Info';

export default class Player1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roundFinished: this.props.finished,
      gameValues: this.props.gameValues,
      check: true
    }

    this.confirm = this.confirm.bind(this);
  };


  confirm() {
    const inputs = document.getElementsByClassName(styles.player1Picks);
    const values = Array.from(inputs).map((input) => Number(input.value));
    this.props.isReady(1, values)
  }

  render() {
    return (
      <div className={styles.playerContainer}>
        <Player1Info />
        <div></div>
        <div className={styles.playerInput}>
          <div>
            <p>Guess Four Digits 0-9 Each</p>
            <p>Closest guesses throughout WINS</p>
          </div>
          <div>
            <input className={styles.player1Picks} type="number"></input><input className={styles.player1Picks} type="number"></input><input className={styles.player1Picks} type="number"></input><input className={styles.player1Picks} type="number"></input>
          </div>
          <div id={styles.scoreKeeper1}>
            {''}
          </div>
          <button onClick={this.confirm}>CONFIRM</button>
        </div>
      </div>
    );
  };
};