import React from 'react';
import styles from '../styles/settl.module.css';

import dynamic from 'next/dynamic';
const App = dynamic(import('../app.jsx'));
const Player1Info = dynamic(import('./Player1Info'))

export default class Player1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: true,
      taskVal: '',
      dateVal: null,
      user: ''
    }

    this.confirm = this.confirm.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };


  confirm() {
    const inputs = document.getElementsByClassName(styles.player1Picks);
    const values = Array.from(inputs).map((input) => Number(input.value));
    this.props.isReady(1, values);
  };

  handleTaskSubmit(e) {
    e.preventDefault()
    this.props.agree({
      task: this.state.taskVal,
      timeStamp: this.state.dateVal,
      username: this.state.user
    });
  };

  handleChange(e) {
    if (e.target.id === styles.task1) {
      this.setState({taskVal: e.target.value});
    } else {
      this.setState({ dateVal: e.target.value });
    };
  };

  render() {
    return (
      <div className={styles.playerContainer}>
        <Player1Info />
        <div>
          <form className={styles.taskContainer} onSubmit={this.handleTaskSubmit}>
            <label className={styles.label}>If I Lose I Will
              <input id={styles.task1} type="textarea" value={this.state.taskVal} onChange={this.handleChange}></input>
            </label>
            <label className={styles.label}>Before
              <input id={styles.by1} type="datetime-local" value={this.state.dateVal} onChange={this.handleChange}></input>
            </label>
            <input className={styles.acceptTask} type="submit" value="Accept"></input>
          </form>
        </div>
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