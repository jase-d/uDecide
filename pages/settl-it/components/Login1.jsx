// import React from 'react';
// import styles from '../styles/settl.module.css';
// import useSWR from 'swr';


// const fetcher = url => axios.get(url).then((res) => res.data);

// export default function Login1 () {


//   async function getCredentials(e) {
//     e.preventDefault();
//     console.log(e.target)
//     const {data, error} = await useSWR(`http://localhost:3000/api/router?usr=${this.state.info.username}&pwd=${this.state.info.password}`, fetcher);
//     alert(data, error);
//     if (data) {
//       return <div>hello world</div>
//     } else {
//       return <div>goodbye world</div>
//     };
//   };

//   return (
//     <div>
//       <form onSubmit={getCredentials} className={styles.login}>
//         <label>User Name
//           <input name="user" type="text" required></input>
//         </label>
//         <label>Password
//           <input name="password" type="text" required></input>
//         </label>
//         <input type="submit" value="Login"></input>
//       </form>
//     </div>
//   );
//   };





















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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
    this.getCredentials = this.getCredentials.bind(this);
  };

  async getCredentials (e) {
    e.preventDefault();
    console.log('hello')
    const loginInfo = this.state.info;
    const userInfo = await axios.get('/api/router', {loginInfo})
    this.props.logIn(userInfo.data);
  };


  handleChange(e) {
    if (e.target.name === 'user') {
      this.setState({ info: {username: e.target.value}});
    } else {
      this.setState({ info: {password: e.target.value}});
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getCredentials} className={styles.login}>
          <label>User Name
            <input name="user" type="text" onChange={this.handleChange} value={this.state.info.username} required></input>
          </label>
          <label>Password
            <input name="password" type="text" onChange={this.handleChange} value={this.state.info.password} required></input>
          </label>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    );
  };
};

// const {data, error} = await useSWR(`http://localhost:3000/api/router?usr=${this.state.info.username}&pwd=${this.state.info.password}`, fetcher);
// alert(data, error);
// if (data) {
//   return <div>hello world</div>
// } else {
//   return <div>goodbye world</div>
// };