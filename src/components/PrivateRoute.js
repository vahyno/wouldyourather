import React, {Fragment} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './NavBar';

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
    <Route {...rest} render={(props) => (
        !isLogged 
            ? <Redirect 
                to={{pathname: '/login',
                state: { from: props.location }}} /> 
            :
            <Fragment>
                <NavBar />
                <Component {...props}/>
            </Fragment> 
    )}/>
)

function mapStateToProps({authedUser}) {
    return {
      isLogged: Object.values(authedUser).length ? true : false, 
    }
  }

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute);



