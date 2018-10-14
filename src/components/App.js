import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import QuestionInfo from './QuestionInfo';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

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
              <PrivateRoute path='/leaderboard' component={Leaderboard}/>
              <PrivateRoute path='/add' component={NewQuestion}/>
              <PrivateRoute path='/questions/:question_id' component={QuestionInfo}/>
              {/* <Route render={()=>(<p className='center-align'>404 page does not exist</p>)} /> */}
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
