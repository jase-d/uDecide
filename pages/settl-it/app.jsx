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
      user: null,
      ply1Ready: false,
      ply2Ready: false,
      gameReady: false
    };
    this.isReady = this.isReady.bind(this);
  };

  gameReady() {
    const button = document.getElementById(styles.gameButton);
    setTimeout(() => {
      console.log(this.state.ply1Ready, this.state.ply2Ready)
      if (this.state.ply1Ready && this.state.ply2Ready) {
        console.log(button)
        button.style.display = 'block';
        this.setState({ gameReady: !this.state.gameReady })
      };
    }, 100)
  }

  isReady(player) {
    const ply1 = this.state.ply1Ready;
    const ply2 = this.state.ply2Ready;
    if (player === 1) {
      this.setState({ ply1Ready: !ply1 });
    } else {
      this.setState({ ply2Ready: !ply2 })
    };
    this.gameReady()
  };

  render() {

    return(
      <div className={styles.outter}>
          <Player1 isReady={this.isReady} />
          <Main />
          <Player2 isReady={this.isReady}/>
      </div>
    );
  };
};