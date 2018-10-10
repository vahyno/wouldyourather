import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail';

class Leaderboard extends Component {

    render(){
        const {users} = this.props

        console.log('users to map', users)
        return (
            <div>
                <h3>Leaderboard:</h3>
                <ul>
                    {this.props.users.map(userId => (
                        <UserDetail key={userId} userId={userId} />
                    ))}
                </ul>
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


// let users = {
//     sarahedo: {
//         id: 'sarahedo',
//         name: 'Sarah Edo',
//         avatarURL: './avatar.png',
//         answers: {
//           "8xf0y6ziyjabvozdd253nd": 'optionOne',
//           "6ni6ok3ym7mf1p33lnez": 'optionOne',
//           "am8ehyc8byjqgar0jgpub9": 'optionTwo',
//           "loxhs1bqm25b708cmbf3g": 'optionTwo'
//         },
//         questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
//       },
  