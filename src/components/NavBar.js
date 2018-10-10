import React, {Component} from 'react';
import {connect} from 'react-redux';

class NavBar extends Component {
    render(){
        const {authedUser, users} = this.props;
        console.log('authedUser:', authedUser, 'users:', users);
        return (
            <nav>
                <div className="nav-wrapper blue lighten-2">
                <a href="#" style={{'marginLeft':'0.5em'}}className="brand-logo">{authedUser}, Would You Rather?</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Leaderboard</a></li>
                    <li><a href="#">New Question</a></li>
                    <li><a href="#" style={{'marginRight':'2em'}}>Sign Out</a></li>
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