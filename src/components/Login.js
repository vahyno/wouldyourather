import React, {Component} from 'react';
import {connect} from 'react-redux';


class Login extends Component {
    //todo: state, form, figure out login and redirect if user islogged to main.
    //connect to store.

    state = {
        username: '',
        logged: false,
    }

    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}


export default (Login);