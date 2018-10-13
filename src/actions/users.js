import {saveNewUser} from '../utils/api';
import {
    showLoading, 
    hideLoading
} from 'react-redux-loading-bar';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_QUESTION_ANSWER = 'USER_QUESTION_ANSWER';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function usersQuestionAnswer (authedUser, qid, optionText) {
    return {
        type: USER_QUESTION_ANSWER,
        authedUser,
        qid,
        optionText
    }
}

export function handleAddNewUser (username, name, avatarURL) {
    return (dispatch)=>{
        dispatch(showLoading());
        return saveNewUser({
            username, 
            name, 
            avatarURL
        })
            .then((users) => {
                dispatch(receiveUsers(users));
                dispatch(hideLoading());
            })
    }
}
