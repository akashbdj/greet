const initialState = { isLoggedIn: false, isTryingLogin: false, currentUser: null }

export default function(state = initialState, action) {
    switch (action.type) {
        case 'TRY_LOG_IN':
            return { ...state, isLoggedIn: false, isTryingLogin: true, currentUser: null }
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true, isTryingLogin: false, currentUser: action.data }
        case 'LOGIN_FAILED':
            return { ...state, isLoggedIn: false, isTryingLogin: false, currentUser: null }
        default:
            return state
    }
}
