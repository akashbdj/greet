import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    onPasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    onSubmit = () => {
        this.props.onSubmit(this.state)
    }

    renderForm() {
        let { email, password } = this.state

        /*
            TODO:
                1. handle validations
                2. Disable Submit if invalid or empty
         */
        return (
            <div className="login--form-wrapper">
                <input
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.onEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onPasswordChange}
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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => dispatch({ type: 'LOGIN', data })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
