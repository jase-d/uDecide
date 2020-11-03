import React from 'react';
import styles from '../styles/settl.module.css';
import dynamic from 'next/dynamic';

import Link from 'next/link';
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
        <div>
          <Link href="/">
            <a>
              <button className={styles.back}>HOME</button>
            </a>
          </Link>
        </div>
      </div>
    );
  };
};