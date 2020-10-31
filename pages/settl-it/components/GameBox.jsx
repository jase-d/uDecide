import React from 'react';
import styles from '../styles/settl.module.css';
import dynamic from 'next/dynamic';

const ScoreBar = dynamic(import('./ScoreBar.jsx'));
const Game = dynamic(import('./Game.jsx'));

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      button: 'START'
    };
  };
  render() {
    return (
      <div className={styles.gameBox}>
        <ScoreBar/>
        <Game/>
        <div className={styles.gameButton}>
          <button>{this.state.button}</button>
        </div>
      </div>
    );
  };
};