import { createStore } from 'redux'
import rootReducer from './reducers/root'

export default function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState)
}
