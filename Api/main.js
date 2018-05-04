export const loginApi = async (apiAuthUrl, creds) => {
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
    const response = await fetch(window.origin + apiAuthUrl, fetchInit);
    return {
        ok: response.ok,
        body: await response.json()
    }
};
