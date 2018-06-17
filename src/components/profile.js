import React, { Component } from 'react'

class Profile extends Component {
    getCapitalizedName = username => {
        return username.charAt(0).toUpperCase() + username.slice(1)
    }

    render() {
        let {
            params: { username }
        } = this.props.match

        return (
            <div className="profile">
                <header>
                    <img className="profile--pic" src="../../assets/images/buddha.jpg" />
                    <div className="profile--name">Hello, {this.getCapitalizedName(username)}!</div>
                </header>
            </div>
        )
    }
}

export default Profile
