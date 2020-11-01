import React from 'react';
import styles from './styles/settl.module.css';
import dynamic from 'next/dynamic';
const Main = dynamic(() => import('./components/Main.jsx'));
const Player1 = dynamic(() => import('./components/Player1.jsx'));
const Player2 = dynamic(() => import('./components/Player2.jsx'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  };

  render() {

    return(
      <div className={styles.outter}>
          <Player1 />
          <Main />
          <Player2 />
      </div>
    );
  };
};