import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../assets/styles/main.css'

import routes from './routes'
import configureStore from './store'
import storage from './utils/storage'

let store = configureStore(storage.getState())
ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'))
