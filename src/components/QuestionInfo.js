import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail';
import '../styles/questionInfo.css';
import {handleQuestionAnswer} from '../actions/shared';

class QuestionInfo extends Component {
    render(){
        const {question, users, authedUser} = this.props;
        console.log(
            'question:', question,
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

function mapStateToProps ({questions, users, authedUser}, props ) {
    const {question_id} = props.match.params;
    const question = questions[question_id];

    return {
        question,
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
 */