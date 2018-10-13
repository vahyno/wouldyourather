import React, {Component} from 'react';
import '../styles/login.css';
import {connect} from 'react-redux';
import {userLogin} from '../actions/authedUser';
import {Link, Redirect} from 'react-router-dom';


class Login extends Component {

    state = {
        username: '',
        logged: false,
    }

    onFromSubmit = (e) => {
        e.preventDefault();
        const { username } = this.state;
        const { dispatch } = this.props;

        if (username !=='') {
            dispatch(userLogin(username));
            this.setState({
                logged: true
            });
        }
    }

    handleInputChange = (e) => {
        const username = e.target.value;
        this.setState({
            username
        });
    }

    render() {
        const {users, authedUser} = this.props;
        const { logged } = this.state;
        const { from } = this.props.location.state || { from: { pathname: '/' }};

        if (logged) {
            return (
                <Redirect to={from} />
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
                            <option key={user.id} value={user.id}>{user.name}</option>
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
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        }),
        authedUser
    }
}

export default connect(mapStateToProps)(Login);