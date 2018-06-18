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
 *     username: akashbdj/jondoe
 *     password: 12345/54321
 *
 *  Try to login with these credentials
 */
;(function seed() {
    localStorage.setItem('akashbdj', '12345')
    localStorage.setItem('jondoe', '54321')
})()

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('root'))
