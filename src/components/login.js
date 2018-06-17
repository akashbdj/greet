import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {}
    }

    onCredentialChange = (entity, e) => {
        this.setState({ [entity]: e.target.value, errors: {} })
    }

    /*
        TODO:
            1. handle validations
            2. Disable Submit if invalid or empty
    */
    onSubmit = () => {
        const { dispatch } = this.props
        const { email, password } = this.state

        // basic regex to test email!
        if (!/@/.test(email)) {
            this.setState({ errors: { email: 'Email looks invalid' } })
            return
        }

        if (!password) {
            this.setState({ errors: { password: 'Password cannot be empty' } })
            return
        }

        dispatch({ type: 'TRY_LOG_IN' })

        // setTimeout is being used to mimic actual network call
        setTimeout(() => {
            const token = localStorage.getItem(email)
            if (token) {
                dispatch({ type: 'LOGIN_SUCCESS', data: token })
            } else {
                this.setState({ errors: { failed: 'Email/Password incorrect' } })
                dispatch({ type: 'LOGIN_FAILED' })
            }
        }, 2000)
    }

    hasErrors = () => {
        let { errors } = this.state
        return Object.keys(errors).length > 0
    }

    renderForm() {
        let { email, password, errors } = this.state
        let { isTryingLogin } = this.props
        let buttonClasses = ['login--button']

        if (this.hasErrors() || isTryingLogin) {
            buttonClasses.push('disabled')
        }

        return (
            <div className="login--form-wrapper">
                <input
                    placeholder="Email"
                    name="email"
                    className={errors.email ? 'error' : ''}
                    value={email}
                    onChange={e => this.onCredentialChange('email', e)}
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
                    <div class="login--error-section">
                        {errors.email}
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
