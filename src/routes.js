import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from './components/login'

export default (
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="login" />
            <Route path="/login" component={Login} />
            <Route component={() => <h1>404!</h1>} />
        </Switch>
    </BrowserRouter>
)
