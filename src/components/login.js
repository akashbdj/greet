import React, { Component } from 'react'
import { connect } from 'react-redux'

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

        dispatch({ type: 'TRY_LOG_IN' })

        // setTimeout is being used to mimic actual network call
        setTimeout(() => {
            const token = localStorage.getItem(username)
            if (token && token === password) {
                dispatch({ type: 'LOGIN_SUCCESS', data: { username, token } })
            } else {
                this.setState({ errors: { failed: 'Username/Password incorrect' } })
                dispatch({ type: 'LOGIN_FAILED' })
            }
        }, 2000)
    }

    hasErrors = () => {
        let { errors } = this.state
        return Object.keys(errors).length > 0
    }

    renderForm() {
        let { username, password, errors } = this.state
        let { isTryingLogin } = this.props
        let buttonClasses = ['login--button']

        if (this.hasErrors() || isTryingLogin) {
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
                        {isTryingLogin ? 'Loading...' : 'Log In'}
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

const mapStateToProps = ({ isTryingLogin }) => ({ isTryingLogin })
export default connect(mapStateToProps)(Login)
