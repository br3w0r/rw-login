export const loginApi = async (tokenAuthUrl, creds) => {
    const fetchInit = {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            "username": creds.username,
            "password": creds.password
        })
    };
    const response = await fetch(window.origin + tokenAuthUrl, fetchInit);
    return {
        ok: response.ok,
        body: await response.json()
    }
};
