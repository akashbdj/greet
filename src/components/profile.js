import React, { Component } from 'react'
import { capitalize } from '../utils/helper'

class Profile extends Component {
    render() {
        let {
            params: { username }
        } = this.props.match

        return (
            <div className="profile">
                <header>
                    <img className="profile--pic" src="../../assets/images/buddha.jpg" />
                    <div className="profile--name">Hello, {capitalize(username)}!</div>
                </header>
            </div>
        )
    }
}

export default Profile
