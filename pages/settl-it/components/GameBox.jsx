import React from 'react';
import styles from '../styles/settl.module.css';
import dynamic from 'next/dynamic';

const ScoreBar = dynamic(import('./ScoreBar.jsx'));
const Game = dynamic(import('./Game.jsx'));

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '0000',
      button: 'START'
    };
    this.getNumber = this.numberSequence.bind(this);
  };

  numberSequence(second = 0) {
  var count = 0;
  const go = () => {
    console.log(count)
    count++;
      this.setState({
        number: Math.floor(Math.random() * (10000 - 1111) + 1111)
      });
    if (count >= 100) {
      return;
    } else {
      window.requestAnimationFrame(go);
    }
  };
  return go()
  };

  render() {
    return (
      <div className={styles.gameBox}>
        <ScoreBar/>
        <Game number={this.state.number}/>
        <div className={styles.gameButton}>
          <button onClick={() => this.getNumber()}>{this.state.button}</button>
        </div>
      </div>
    );
  };
};