import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UserDetail from './UserDetail';
import '../styles/questionInfo.css';
import {handleQuestionAnswer} from '../actions/shared';


class QuestionInfo extends Component {

    handleVote = (e, option) => {
        e.preventDefault();
        const {dispatch, authedUser, question} = this.props;
        const qid = question.id;
        dispatch(handleQuestionAnswer(authedUser, qid, option));
    }

    render(){
        const {question, authedUser} = this.props;
        const votedOne = question.optionOne.votes.includes(authedUser);
        const votedTwo = question.optionTwo.votes.includes(authedUser);

        return (
            <div>
                {!question ? <h1 className='center questionInfo-title'>error 404, poll does not exist</h1> : 
                    <div>
                        <h5 className='questionInfo-author-title'>Would You Rather</h5>
                        <div className='questionInfo-author-list'>
                            <ul className='collection'>
                                <UserDetail userId={question.author} />
                            </ul>

                            {!question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser) 
                                ? ( 
                                    <ul className='collection with-header'>
                                        <li className="center collection-header"><h4>Cast Your Vote:</h4></li>
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
                                ) 
                                : (
                                    <ul className='collection'>
                                        <li className='left questionInfo-voted-list collection-item'
                                            style={{'backgroundColor': votedOne? '#e57373':''}}>
                                            <h6>{question.optionOne.text}</h6>
                                            <h6>
                                                {question.optionOne.votes.length 
                                                ? (`votes: ${question.optionOne.votes.length}`)
                                                : 'no votes yet'}
                                            </h6>
                                            <h6>
                                                {question.optionOne.votes.length
                                                ?(`${(question.optionOne.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length)*100).toFixed(2)}% of all votes`)
                                                : '0% of all votes'}
                                            </h6>
                                        </li>
                                        <li className='right questionInfo-voted-list collection-item'
                                            style={{'backgroundColor': votedTwo? '#448aff':''}}>
                                            <h6>{question.optionTwo.text}</h6>
                                            <h6>
                                                {question.optionTwo.votes.length
                                                ?(`votes: ${question.optionTwo.votes.length}`)
                                                : 'no votes yet'}
                                            </h6>
                                            <h6>
                                                {question.optionTwo.votes.length
                                                ?(`${(question.optionTwo.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length)*100).toFixed(2)}% of all votes`)
                                                : '0% of all votes'}
                                            </h6>
                                        </li>
                                    </ul>
                                )
                            }
                            <Link to='/' 
                                className='back-btn waves-effect waves-light blue lighten-2 btn'>
                                Back
                            </Link>
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

