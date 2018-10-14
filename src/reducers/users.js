import {
    RECEIVE_USERS,
    USER_ADD_QUESTION,
    USER_QUESTION_ANSWER,
} from '../actions/users';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case USER_ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            }    
        case USER_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.option
                    }
                }
            }
        default :
            return state
    }
}