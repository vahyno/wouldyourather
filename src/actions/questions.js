import {
    saveQuestion,
} from '../utils/api';
import {
    showLoading, 
    hideLoading} 
from 'react-redux-loading-bar';
import {handleInitialData} from './shared';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function questionsQuestionAnswer (authedUser, qid, optionText) {
    return {
        type: QUESTION_ANSWER,
        authedUser,
        qid,
        optionText
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
                dispatch(handleInitialData());
                dispatch(hideLoading());
            })
    }
}

