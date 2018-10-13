import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    QUESTION_ANSWER,
} from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.optionText]: {
                        ...state[action.qid][action.optionText],
                        votes: state[action.qid][action.optionText].votes.concat([action.authedUser])
                    }
                }
            }        
        default :
            return state
    }
}

//authedUser, qid, optionText

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
*/