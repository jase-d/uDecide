import React from 'react';
import styles from './styles/settl.module.css';
import Main from './components/Main.jsx';
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
          <div id="ply1">ply1</div>
          <Main />
          <div id="ply2">ply2</div>
      </div>
    );
  };
};