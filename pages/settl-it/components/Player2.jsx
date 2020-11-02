import React from 'react';
import styles from '../styles/settl.module.css';

import Player2Info from './Player2Info.jsx';

export default class Player2 extends React.Component {
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
  };

  confirm() {
    const inputs = document.getElementsByClassName(styles.player2Picks);
    console.log(inputs, 'inputs')
    const values = Array.from(inputs).map((input) => Number(input.value));
    this.props.isReady(2, values)
  }
  render() {
    return (
      <div className={styles.playerContainer}>
        <Player2Info />
        <div></div>
        <div className={styles.playerInput}>
          <div>
            <p>Guess Four Digits 0-9 Each</p>
            <p>Closest guesses throughout WINS</p>
          </div>
          <div>
            <input className={styles.player2Picks} type="number"></input><input className={styles.player2Picks} type="number"></input><input className={styles.player2Picks} type="number"></input><input className={styles.player2Picks} type="number"></input>
          </div>
          <div id={styles.scoreKeeper2}>
            {''}
          </div>
          <button onClick={this.confirm}>CONFIRM</button>
        </div>
      </div>
    );
  };
};