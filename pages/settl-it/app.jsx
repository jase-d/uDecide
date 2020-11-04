import React from 'react';
import styles from '../../styles/settl.module.css';
import axios from 'axios';

import dynamic from 'next/dynamic';
const Main = dynamic(() => import('../../components/Main.jsx'));
const Login1 = dynamic(() => import('../../components/Login1.jsx'));
const Login2 = dynamic(() => import('../../components/Login2.jsx'));
const Player1 = dynamic(() => import('../../components/Player1.jsx'));
const Player2 = dynamic(() => import('../../components/Player2.jsx'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: [{}, [{}]],
      user2: [{}, [{}]],
      ply1Ready: false,
      ply1Guess: null,
      ply2Ready: false,
      ply2Guess: null,
      finishRound: false,
      gameValues: [0,0,0,0],
      score1: '',
      score2: '',
      task1: {},
      task2: {}
    };
    this.roundLoser = null;
    this.isReady = this.isReady.bind(this);
    this.compare = this.compare.bind(this);
    this.agreeToTask = this.agreeToTask.bind(this);
    this.logIn = this.logIn.bind(this);
  };

  async compare(gameValues) {
    await this.setState({ gameValues: gameValues, finishRound: !this.state.finishRound });
    var keep1 = document.getElementById(styles.scoreKeeper1);
    var differences1 = this.state.ply1Guess.map((guess, index) => Math.abs(guess - gameValues[index]));
    var total1 = differences1.reduce((acc, difference) => acc += difference, 0);

    var keep2 = document.getElementById(styles.scoreKeeper2);
    var differences2 = this.state.ply2Guess.map((guess, index) => Math.abs(guess - gameValues[index]));
    var total2 = differences2.reduce((acc, difference) => acc += difference, 0);

    keep1.innerHTML = `<span>${differences1.join(' + ')}</span> = <span>${total1}</span>`;
    keep2.innerHTML = `<span>${differences2.join(' + ')}</span> = <span>${total2}</span>`;
    if (total1 > total2) {
      await this.setState({score2: this.state.score2 += '|'});
    } else {
      await this.setState({score1: this.state.score1 += '|'});
    };
    if (this.state.score1.length === 5 || this.state.score2.length === 5) {
      if (this.state.score1.length === 5) {
        alert('PLAYER 1 WINS');
        this.roundLoser = this.state.user2;
      } else if (this.state.score2.length === 5) {
        alert('PLAYER 2 WINS');
        this.roundLoser = this.state.task1;
        this.roundLoser.iou = 'anon';
        this.roundLoser.user_id = this.state.user1[0]['user_id'];
        alert(this.state.task1);
      };
      console.log(this.state.task1);
      const confirmation = await axios.post(`http://localhost:3000/api/router`, { body: this.roundLoser })
      this.setState({score1: '', score2: ''});
    };
  };

  gameReady() {
    const button = document.getElementById(styles.gameButton);
    setTimeout(() => {
      if (this.state.ply1Ready && this.state.ply2Ready) {
        button.style.display = 'block';
        this.setState({ gameReady: !this.state.gameReady })
      };
    }, 100);
  };

  agreeToTask(task1, task2) {
    if (task1) {
      this.setState({ task1 });
    } else if (task2) {
      this.setState({ task2 })
    }
    console.log(this.state.task1)
  };

  logIn(info, player) {
    if (player === 1) {
      this.setState({ user1: info });
      this.player1();
    } else {
      this.setState({ user2: info });
      this.player2();
    }
  };

  isReady(player, values) {
    const ply1 = this.state.ply1Ready;
    const ply2 = this.state.ply2Ready;
    if (player === 1) {
      this.setState({
        ply1Ready: !ply1,
        ply1Guess: values
      });
    } else {
      this.setState({
        ply2Ready: !ply2,
        ply2Guess: values
      });
    };
    this.gameReady();
  };

  player1() {
    return this.state.user1[0].username ?
      <Player1 info={this.state.user1} agree={this.agreeToTask} gameValues={this.state.gameValues} isReady={this.isReady} /> :
      <Login1 logIn={this.logIn}/>
  };

  player2() {
    return this.state.user2[0].username ?
      <Player2 info={this.state.user2} agree={this.agreeToTask} gameValues={this.state.gameValues} isReady={this.isReady} /> :
      <Login2 logIn={this.logIn}/>
  };

  render() {
    console.log(this.state.task1)
    return(
      <div className={styles.outter}>
          {this.player1()}
          <Main score1={this.state.score1} score2={this.state.score2} compare={this.compare} />
          {this.player2()}
      </div>
    );
  };
};
