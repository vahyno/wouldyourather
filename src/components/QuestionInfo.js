import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserDetail from './UserDetail';
import '../styles/questionInfo.css';
import {handleQuestionAnswer} from '../actions/shared';


class QuestionInfo extends Component {

    handleVote = (e, option) => {
        e.preventDefault();
        const {dispatch, authedUser, question} = this.props;
        const qid = question.id;
        dispatch(handleQuestionAnswer(authedUser, qid, option));
        console.log(option);
    }

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
                        <h5 className='questionInfo-author-title'>Would You Rather</h5>
                        <div className='questionInfo-author-list'>
                            <ul className='collection'>
                                <UserDetail userId={question.author} />
                            </ul>

                                {/*no answer to question*/}
                                <ul className='collection'>
                                    <li className='questionInfo-question-list left btn-large waves-effect waves collection-item'
                                        onClick={(e) => this.handleVote(e, 'optionOne')}
                                        >
                                        {question.optionOne.text}
                                    </li>
                                    <li className='questionInfo-question-list btn-large waves-effect waves collection-item'
                                        onClick={(e) => this.handleVote(e, 'optionTwo')}
                                        >
                                        {question.optionTwo.text}
                                    </li>
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
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    } */

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