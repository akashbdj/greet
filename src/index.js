import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../assets/styles/main.css'

import Routes from './routes'
import configureStore from './store'

let initialState = {}
let store = configureStore(initialState)

/**
 *  These are the sample data you can use
 *  to test the flow:
 *  Here:
 *     email: steve@apple.com
 *     password: apple@12345
 *
 *  Try to login with these credentials
 */
;(function init() {
    localStorage.setItem('steve@apple.com', 'apple@12345')
    localStorage.setItem('steve@orange.com', 'orange@12345')
})()

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('root'))
