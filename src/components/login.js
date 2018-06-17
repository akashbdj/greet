import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onCredentialChange = (entity, e) => {
        this.setState({ [entity]: e.target.value })
    }

    /*
        TODO:
            1. handle validations
            2. Disable Submit if invalid or empty
    */
    onSubmit = () => {
        const { dispatch } = this.props
        const { email } = this.state

        dispatch({ type: 'TRY_LOG_IN' })
        const token = localStorage.getItem(email)

        if (token) {
            dispatch({ type: 'LOGIN_SUCCESS', data: token })
        } else {
            dispatch({ type: 'LOGIN_FAILED' })
        }
    }

    renderForm() {
        let { email, password } = this.state
        return (
            <div className="login--form-wrapper">
                <input
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={e => this.onCredentialChange('email', e)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => this.onCredentialChange('password', e)}
                />
                <div>
                    <button className="login--button" onClick={this.onSubmit}>
                        Log In
                    </button>
                </div>
            </div>
        )
    }

    render() {
        return <div className="login">{this.renderForm()}</div>
    }
}

export default connect()(Login)
