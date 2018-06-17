const initialState = { isLoggedIn: false, isTryingLogin: false, token: '' }

export default function(state = initialState, action) {
    switch (action.type) {
        case 'TRY_LOG_IN':
            return { ...state, isLoggedIn: false, isTryingLogin: true, token: '' }
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true, isTryingLogin: false, token: action.data }
        case 'LOGIN_FAILED':
            return { ...state, isLoggedIn: false, isTryingLogin: false, token: '' }
        default:
            return state
    }
}
