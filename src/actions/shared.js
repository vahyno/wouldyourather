import {
    getInitialData,
    saveQuestionAnswer,
} from '../utils/api';

import {
    showLoading, 
    hideLoading
} from 'react-redux-loading-bar';

import {receiveUsers, usersQuestionAnswer} from './users';
import {receiveQuestions, questionsQuestionAnswer} from './questions';

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            })
    }
}

export function handleQuestionAnswer (authedUser, qid, option) {
    return (dispatch) => {
        dispatch(showLoading());
        const answer = option;
        return saveQuestionAnswer(authedUser, qid, answer)
            .then(() =>{
                dispatch(questionsQuestionAnswer(authedUser, qid, option));
                dispatch(usersQuestionAnswer(authedUser, qid, option));
                dispatch(hideLoading());
            })
    }
}

