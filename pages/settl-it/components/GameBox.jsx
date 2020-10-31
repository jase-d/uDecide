import React from 'react';
import styles from '../styles/settl.module.css';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
  };
  render() {
    return (
      <div className={styles.game}>
        Game Box
      </div>
    );
  };
};