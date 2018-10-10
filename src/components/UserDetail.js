import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    render(){
        const {user} = this.props;
        console.log('user detail', user);
        return (
            <div>
                <h3>UserDetail:</h3>
            </div>
        )
    }
}

function mapStateToProps({users}, {userId}) {
    return {
        user: users[userId]
    }
}

export default connect(mapStateToProps)(UserDetail);


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
  