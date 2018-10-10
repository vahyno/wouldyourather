import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    console.log('props loading',loading);

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading 
            ? null
            : <div>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <PrivateRoute path='/' exact component={Dashboard}/>
              {/*<Route render={()=>(<p className='center-align'>404 page does not exist</p>)} />*/} 
            </div>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({users}) {
  return {
    loading: !Object.values(users).length ? true : false,
  }
}

export default connect(mapStateToProps)(App);
