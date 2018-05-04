import {loginApi} from './Api/main.js'

export const loginHandler = (token) => (
	localStorage.setItem('token', token)
);

export const login = async (apiAuthUrl, callback, creds) => {
    const response = await loginApi(apiAuthUrl, creds);
    if (response.ok) {
        callback(true, response.body);
    } else {
		callback(false);
	}
};
