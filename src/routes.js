import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from './components/login'
import Profile from './components/profile'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/:username" component={Profile} />

            <Route component={() => <h1>404!</h1>} />
        </Switch>
    </BrowserRouter>
)
