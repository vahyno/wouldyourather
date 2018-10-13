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

export function handleQuestionAnswer (authedUser, qid, optionText) {
    return (dispatch) => {
        dispatch(showLoading());
        const answer = optionText;
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() =>{
                dispatch(questionsQuestionAnswer(authedUser, qid, optionText))
                dispatch(usersQuestionAnswer(authedUser, qid, optionText))
                dispatch(hideLoading());
            })
    }
}

