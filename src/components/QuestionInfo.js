import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionInfo extends Component {
    render(){
        return (
            <div>QuestionInfo</div>
        )
    }
}

function mapStateToProps ({questions, users, autheUser}) {
    return {
        questions, 
        users, 
        autheUser
    }
}

export default connect()(QuestionInfo);