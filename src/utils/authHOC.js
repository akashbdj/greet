import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export function Authenticated(WrappedComponent) {
    class AuthWrapper extends Component {
        render() {
            let {
                isAuthenticated,
                location: { pathname }
            } = this.props

            if (isAuthenticated) {
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
            let { isAuthenticated, currentUser } = this.props
            if (isAuthenticated) {
                return <Redirect to={`/${currentUser}`} />
            } else {
                return <WrappedComponent {...this.props} />
            }
        }
    }

    return connect(state => ({ ...state }))(UnAuthWrapper)
}
