import { TRY_LOG_IN, LOGIN_SUCCESS, LOGIN_FAILED, LOG_OUT } from '../constants'
import storage from '../utils/storage'

const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
    currentUser: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TRY_LOG_IN:
            return {
                ...state,
                isAuthenticating: true
            }
        case LOGIN_SUCCESS:
            let nextState = {
                ...state,
                isAuthenticated: true,
                isAuthenticating: false,
                currentUser: action.data
            }
            storage.saveState(nextState)
            return nextState
        case LOGIN_FAILED:
            return initialState
        case LOG_OUT:
            storage.saveState({})
            return initialState
        default:
            return state
    }
}
