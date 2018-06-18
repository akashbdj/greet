import { TRY_LOG_IN, LOGIN_SUCCESS, LOGIN_FAILED, LOG_OUT } from '../constants'

export const logIn = user => {
    return { type: LOGIN_SUCCESS, data: user.username }
}

export const loginFailed = () => {
    return { type: LOGIN_FAILED }
}

export const tryLogIn = () => {
    return { type: TRY_LOG_IN }
}

export const logOut = () => {
    return { type: LOG_OUT }
}
