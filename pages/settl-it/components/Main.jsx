import React from 'react';
import styles from '../styles/settl.module.css';
import GameBox from './GameBox.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null
    };
  };
  render() {
    return (
      <div className={styles.gamebox}>
        <h1 className={styles.header}>Settl-it
        </h1>
        <div className={styles.bar}> span of games
        </div>
        <GameBox />
        <button className={styles.back}>BACK</button>
      </div>
    );
  };
};