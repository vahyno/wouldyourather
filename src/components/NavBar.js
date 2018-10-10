import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userLogout} from '../actions/authedUser';

class NavBar extends Component {

    signOut = (e) => {
        e.preventDefault();
        this.props.dispatch(userLogout());
    }

    render(){
        const {authedUser, users} = this.props;
        console.log('authedUser:', authedUser, 'users:', users);
        return (
            <nav>
                <div className="nav-wrapper blue lighten-2">
                <h3 style={{'marginLeft':'0.5em'}} className="brand-logo">{authedUser}, Would You Rather?</h3>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/'}>Dashboard</Link></li>
                    <li><Link to={'/leaderboard'}>Leaderboard</Link></li>
                    <li><Link to={'/add'}>New Question</Link></li>
                    <li><a  href='backToLogin'
                            style={{'marginRight':'2em'}}
                            onClick={this.signOut}>
                            Sign Out
                        </a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(NavBar);