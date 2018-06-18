import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export function Authenticated(WrappedComponent) {
    class AuthWrapper extends Component {
        render() {
            let { isLoggedIn } = this.props
            if (isLoggedIn) {
                return <WrappedComponent {...this.props} />
            }

            return <Redirect to={'/login'} />
        }
    }

    return connect(state => ({ ...state }))(AuthWrapper)
}

export function UnAuthenticated(WrappedComponent) {
    class UnAuthWrapper extends Component {
        render() {
            let { isLoggedIn, currentUser } = this.props
            if (isLoggedIn) {
                return <Redirect to={`/${currentUser.username}`} />
            } else {
                return <WrappedComponent {...this.props} />
            }
        }
    }

    return connect(state => ({ ...state }))(UnAuthWrapper)
}
