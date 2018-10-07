export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function userLogin (id) {
    return {
        type: USER_LOGIN,
        id
    }
}

export function userLogout () {
    return {
        type: USER_LOGOUT,
    }
}

