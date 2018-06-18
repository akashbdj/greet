import React, { Component } from 'react'
import { capitalize } from '../utils/helper'
import { logOut } from '../actions'

class Profile extends Component {
    onLogout = () => {
        this.props.dispatch(logOut())
    }

    render() {
        let { currentUser } = this.props

        return (
            <div className="profile">
                <header>
                    <img className="profile--pic" src="../../assets/images/buddha.jpg" />
                    <div className="profile--name">Hello, {capitalize(currentUser)}!</div>
                    <button className="profile--button" onClick={this.onLogout}>
                        Log out
                    </button>
                </header>
            </div>
        )
    }
}

export default Profile
