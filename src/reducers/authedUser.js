import {
    USER_LOGIN,
    USER_LOGOUT
} from '../actions/authedUser';

export default function authedUser (state = null, action) {
    switch(action.type) {
        case USER_LOGIN:
            return action.id
        case USER_LOGOUT:
            return null
        default:
            return state    
    }
}