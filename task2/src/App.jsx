import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

// input: props (obj)
// output: jsx

// algo
// 1. show login by default
// 2. after login click - hide Login & show Spinner for 2 seconds
// 3. after Logout click - hide Logout & show Lodin
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <>
        <Spinner />
        <Login />
        <Logout />
      </>
    );
  }
}

export default App;

// 0. make a layout +++++
// 1. split on components ++++
// 2. static version in react +
// 3. declare state and props +
// 4. write logic
