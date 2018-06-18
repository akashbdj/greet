import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Authenticated, UnAuthenticated } from './utils/authHOC'

import Login from './components/login'
import Profile from './components/profile'

export default (
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={UnAuthenticated(Login)} />
            <Route path="/:username" component={Authenticated(Profile)} />

            <Route component={() => <h1>404!</h1>} />
        </Switch>
    </BrowserRouter>
)
