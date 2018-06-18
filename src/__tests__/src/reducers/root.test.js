import rootReducer from '../../../reducers/root'
import '../../../utils/testHelpers'

const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
    currentUser: null
}

test('Initial State', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
})

test('Login Success', () => {
    expect(rootReducer(undefined, { type: 'login_success', data: 'akashbdj' })).toEqual({
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: 'akashbdj'
    })
})

test('Try Login', () => {
    expect(rootReducer(undefined, { type: 'try_log_in' })).toEqual({
        ...initialState,
        isAuthenticating: true
    })
})
