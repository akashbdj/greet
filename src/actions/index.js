export const logIn = user => {
    localStorage.setItem('app::token', user.password)
    return { type: 'LOGIN_SUCCESS', data: user }
}

export const loginFailed = () => {
    return { type: 'LOGIN_FAILED' }
}

export const tryLogIn = () => {
    return { type: 'TRY_LOG_IN' }
}
