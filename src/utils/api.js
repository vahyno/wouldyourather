import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
    _saveNewUser,
} from './_DATA';

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestion (question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer (authedUser, qid, answer) {
    return _saveQuestionAnswer({
        authedUser, 
        qid, 
        answer
    });
}

export function saveNewUser (user) {
    return _saveNewUser(user);
}

