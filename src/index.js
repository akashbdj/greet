import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './style/main.css'

import Routes from './routes'
import configureStore from './store'

let initialState = {}
let store = configureStore(initialState)

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('root'))
