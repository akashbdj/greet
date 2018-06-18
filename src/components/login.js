import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../model'
import { logIn, loginFailed, tryLogIn } from '../actions'

class Login extends Component {
    state = {
        username: '',
        password: '',
        errors: {}
    }

    onCredentialChange = (entity, e) => {
        this.setState({ [entity]: e.target.value, errors: {} })
    }

    onSubmit = () => {
        const { dispatch } = this.props
        const { username, password } = this.state

        if (!username) {
            this.setState({ errors: { username: 'Username cannot be empty' } })
            return
        }

        if (!password) {
            this.setState({ errors: { password: 'Password cannot be empty' } })
            return
        }

        dispatch(tryLogIn())

        // setTimeout is being used to mimic actual network call
        setTimeout(() => {
            const user = users.find(
                user => user.username === username && user.password === password
            )

            if (user) {
                dispatch(logIn(user))
            } else {
                this.setState({ errors: { failed: 'Username/Password incorrect' } })
                dispatch(loginFailed())
            }
        }, 2000)
    }

    hasErrors = () => {
        let { errors } = this.state
        return Object.keys(errors).length > 0
    }

    renderForm() {
        let { username, password, errors } = this.state
        let { isAuthenticating } = this.props
        let buttonClasses = ['login--button']

        // if the form has any errors or
        // we're trying to log in ==> disable Log In button
        if (this.hasErrors() || isAuthenticating) {
            buttonClasses.push('disabled')
        }

        return (
            <div className="login--form-wrapper">
                <input
                    placeholder="Username"
                    name="username"
                    className={errors.username ? 'error' : ''}
                    value={username}
                    onChange={e => this.onCredentialChange('username', e)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={errors.password ? 'error' : ''}
                    name="password"
                    value={password}
                    onChange={e => this.onCredentialChange('password', e)}
                />
                <div>
                    <button
                        className={buttonClasses.join(' ')}
                        disabled={buttonClasses.indexOf('disabled') > -1}
                        onClick={this.onSubmit}
                    >
                        {isAuthenticating ? 'Loading...' : 'Log In'}
                    </button>
                </div>
                {this.hasErrors() ? (
                    <div className="login--error-section">
                        {errors.username}
                        {errors.password}
                        {errors.failed}
                    </div>
                ) : null}
            </div>
        )
    }

    render() {
        return <div className="login">{this.renderForm()}</div>
    }
}

const mapStateToProps = ({ isAuthenticating }) => ({ isAuthenticating })
export default connect(mapStateToProps)(Login)
