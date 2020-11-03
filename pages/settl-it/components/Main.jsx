import React from 'react';
import styles from '../styles/settl.module.css';
import dynamic from 'next/dynamic';
const GameBox = dynamic(() => import('./GameBox.jsx'));

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={styles.container}>
        <div id={styles.headContainer}>
          <h1 className={styles.header}>Settl-it</h1>
        </div>
        <div className={styles.bar}> span of games
        </div>
        <GameBox score1={this.props.score1} score2={this.props.score2} compare={this.props.compare} />
        <button className={styles.back}>BACK</button>
      </div>
    );
  };
};