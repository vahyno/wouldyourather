import React from 'react';
import {connect} from 'react-redux';

const UserDetail = (props) => {
    const {user} = props;

    return (
        <li className="collection-item avatar">
            <img src={user.avatarURL} alt={`this is: ${user.name}`} className="circle" />
            <span className="title">{user.name}</span>
            <p>{`Questions asked: ${user.questions.length}`}</p>
            <p>{`Answered: ${Object.keys(user.answers).length}`}</p>
        </li>
    )
}

function mapStateToProps({users}, {userId}) {
    return {
        user: users[userId]
    }
}

export default connect(mapStateToProps)(UserDetail);  