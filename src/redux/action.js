import { LOG_IN } from './actionTypes';
export const login = (username, password) => ({
    type: LOG_IN,
    payload: {
        username: username,
        password: password
    }
});