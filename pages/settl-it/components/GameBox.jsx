import React from 'react';
import styles from '../styles/settl.module.css';
import dynamic from 'next/dynamic';

const ScoreBar = dynamic(import('./ScoreBar.jsx'));
const Game = dynamic(import('./Game.jsx'));

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [0,0,0,0],
      button: 'START',
      gameReady: this.props.gameReady
    };
    this.getNumber = this.numberSequence.bind(this);
  };

  async numberSequence(second = 0) {
  var count = 0;
  var numberIndex = 0;
  const go = async () => {
    count++;
    var numbers = this.state.number
    numbers[numberIndex] = Math.floor(Math.random() * 10);
      this.setState({
        number: numbers
      });
    if (count >= 50) {
      if (numberIndex === 3) {
        this.props.compare(this.state.number);
        return;
      } else {
        numberIndex++;
        count = 0;
        await go();
      }
    } else {
      window.requestAnimationFrame(go);
    }
  };
   await go()
  };



  render() {
    return (
      <div className={styles.gameBox}>
        <ScoreBar score1={this.props.score1} score2={this.props.score2}/>
        <Game  number={this.state.number}/>
        <div className={styles.gameButton}>
          <button id={styles.gameButton} onClick={() => this.getNumber()}>{this.state.button}</button>
        </div>
      </div>
    );
  };
};