import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail';
import '../styles/questionInfo.css';

class QuestionInfo extends Component {
    render(){
        const {questions, users, authedUser} = this.props;
        const qID = this.props.match.params.question_id;
        const question = questions[qID];
        console.log(
            'QUESTION-ID:', qID,
            'GOLD questions:', questions[qID],
            'questions:', questions,
            'users:', users, 
            'authedUser:', authedUser);

        return (
            <div>
                {!question ? <h1 className='center questionInfo-title'>error 404, poll does not exist</h1> : 
                    <div>
                        <h5 className='questionInfo-title'>Would You Rather</h5>
                        <div className='questionInfo-list'>
                            <ul className='collection'>
                                <UserDetail userId={question.author} />
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps ({questions, users, authedUser}, params ) {
    return {
        params,
        questions,
        users, 
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionInfo);

/*let questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
 */

/*
The details of the poll are available at questions/:question_id.
When a poll is clicked on the home page, the following is shown:
the text “Would You Rather”;
the picture of the user who posted the polling question; and
the two options.
For answered polls, each of the two options contains the following:
the text of the option;
the number of people who voted for that option;
the percentage of people who voted for that option.
The option selected by the logged in user should be clearly marked.
When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another 
user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.) */