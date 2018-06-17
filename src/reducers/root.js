const initialState = { isLoggedIn: false }

export default function(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.data }
        default:
            return state
    }
}
