import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Styles from './style/main.css'

import Home from './components/home'
import Login from './components/login'

const App = () => {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>

                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
