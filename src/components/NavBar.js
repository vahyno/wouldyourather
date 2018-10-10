import React, {Component} from 'react';
import {connect} from 'react-redux';

class NavBar extends Component {
    render(){
        const {authedUser, users} = this.props;
        console.log('authedUser:', authedUser, 'users:', users);
        return (
            <div>NavBar</div>
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