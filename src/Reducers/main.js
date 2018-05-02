const loginReducer = (store = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('token', action.token);
            return {}
        default:
            return {}
    }
}

export default loginReducer
