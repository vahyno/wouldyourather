import {
    getInitialData,
    saveQuestionAnswer,
    saveQuestion,
} from '../utils/api';

import {
    showLoading, 
    hideLoading
} from 'react-redux-loading-bar';

import {receiveUsers, userAddQuestion, usersQuestionAnswer} from './users';
import {receiveQuestions, questionsQuestionAnswer, addQuestion} from './questions';

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

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return saveQuestion({
            // ({ optionOneText, optionTwoText, author })
            optionOneText, 
            optionTwoText, 
            author: authedUser,
        })
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(userAddQuestion(question));
                dispatch(hideLoading());
            })
    }
}
