import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail';
import '../styles/leaderboard.css';

class Leaderboard extends Component {

    render(){
        // const {users} = this.props

        // console.log('users to map', users)
        return (
            <div>
                <h5 className='leaderboard-title'>Leaderboard:</h5>
                <div className='leaderboard-list'>
                <ul className='collection'>
                    {this.props.users.map(userId => (
                        <UserDetail key={userId} userId={userId} />
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users)
            .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)))
    }
}

export default connect(mapStateToProps)(Leaderboard);  