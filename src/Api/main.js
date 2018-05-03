import {TOKEN_AUTH_URL} from '../conf.js'

export const apiLogin = async (creds) => {
    const fetchInit = {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            username: creds.username,
            password: creds.password
        })
    }
    const response = await fetch(window.origin + TOKEN_AUTH_URL, fetchInit);
    return {
        ok: response.ok,
        body: await response.json()
    }
};
