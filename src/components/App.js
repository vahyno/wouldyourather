import React, { Component } from 'react';
import '../App.css';
import Login from './Login';

import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
