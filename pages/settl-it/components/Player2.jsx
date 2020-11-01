import React from 'react';
import styles from '../styles/settl.module.css';

export default class Player2 extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={styles.playerContainer}>
        <div className={styles.info}></div>
        <div></div>
        <div className={styles.playerInput}></div>
      </div>
    )
  }
}