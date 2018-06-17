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
            <div>
                <input name="email" value={email} onChange={this.onEmailChange} />
                <input name="email" value={password} onChange={this.onPasswordChange} />
                <button onClick={this.onSubmit}>Log In</button>
            </div>
        )
    }

    render() {
        return <div>{this.renderForm()}</div>
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
