import React, {Component} from 'react';
import {connect} from 'react-redux';
// import pic from '../styles/usersImg/'

class UserDetail extends Component {

    render(){
        const {user} = this.props;
        console.log('user detail', user);
        return (
            <li className="collection-item avatar">
                <img src={user.avatarURL} alt={`image of ${user.name}`} className="circle" />
                <span className="title">{user.name}</span>
                <p>{`Questions asked: ${user.questions.length}`}</p>
                <p>{`Answered: ${Object.keys(user.answers).length}`}</p>
                {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
            </li>
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
  