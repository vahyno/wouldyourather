import React, {Component} from 'react';
import '../styles/login.css';
import {connect} from 'react-redux';
import {userLogin} from '../actions/authedUser';
import {Link, Redirect} from 'react-router-dom';


class Login extends Component {
    //todo: state, form, figure out login and redirect if user islogged to main.
    //connect to store.

    state = {
        username: '',
        logged: false,
    }

    onFromSubmit = (e) => {
        e.preventDefault();
        const { username } = this.state;
        const { dispatch } = this.props;
        console.log('button - username', username);
        console.log(this.state.logged);

        if (username !=='') {
            dispatch(userLogin(username));
            this.setState({
                logged: true
            });
        }
        console.log(this.state.logged)
    }

    handleInputChange = (e) => {
        const username = e.target.value;
        this.setState({
            username
        });
    }

    render() {
        const {users, authedUser} = this.props;
        console.log('props users:', users);
        console.log('authedUser:', authedUser);
        const { logged } = this.state;

        if (logged) {
            return (
                <Redirect to='/' />
            )
        }

        return (
            <div className='login'>
                <form className='login-form right-align row input-field col s6 m2' onSubmit={this.onFromSubmit}>
                    <h5 className='form-label center-align'>Login to enter:</h5>
                    <select 
                        className="waves-effect waves-light blue lighten-4"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        >
                        <option value='' disabled>Choose existing user</option>
                        {users.map(user => (
                            <option key={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <button
                        className="login-btn waves-effect waves-light red lighten-2 btn" 
                        type="submit" 
                        name="action">
                        Log In
                    </button>
                    <Link 
                        className='login-btn waves-effect waves-light blue lighten-2 btn'
                        to ={`/signup`} >
                        Sign up
                    </Link>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser
    }
}

export default connect(mapStateToProps)(Login);