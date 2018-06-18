import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Authenticated, UnAuthenticated } from './utils/authHOC'

import Login from './components/login'
import Profile from './components/profile'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Authenticated(Profile)} />
            <Route path="/login" component={UnAuthenticated(Login)} />

            <Route component={() => <h1>404!</h1>} />
        </Switch>
    </BrowserRouter>
)
