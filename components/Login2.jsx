import React from 'react';
import styles from '../styles/settl.module.css';
import useSWR from 'swr';
import axios from 'axios';


// const fetcher = url => axios.get(url).then((res) => res.data);

export default class Login1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        username: '',
        password: '',
      }
    };
    this.info = { username: '', password: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
    this.getCredentials = this.getCredentials.bind(this);
  };

  async getCredentials (e) {
    e.preventDefault();
    const userInfo = await axios.get(`/api/router?info=${this.info.username}-${this.info.password}`);
    this.props.logIn(userInfo.data, 2);
  };


  handleChange(e) {
    if (e.target.name === 'user') {
      this.setState({ info: {username: e.target.value}});
      this.info.username = e.target.value;
    } else {
      this.setState({ info: {password: e.target.value}});
      this.info.password = e.target.value;
    };
  };

  render() {
    return (
      <div className={styles.loginContainer}>
        <form onSubmit={this.getCredentials} className={styles.login}>
          <label>User Name</label>
            <input name="user" type="text" onChange={this.handleChange} value={this.state.info.username} required></input>
          <label>Password</label>
            <input name="password" type="password" onChange={this.handleChange} value={this.state.info.password} required></input>
          <input className={styles.submitLogin} type="submit" value="Login"></input>
        </form>
      </div>
    );
  };
};