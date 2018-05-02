import {apiLogin} from '../Api/main.js'

export const loginHandler = (token) => ({
    type: 'LOGIN',
    token: token
});

export const login = (callback, creds) =>  async (dispatch) => {
    const response = await apiLogin(creds);
    if (response.ok) {
        callback(true, response.body);
    } else {
        callback(false);
    }
};
