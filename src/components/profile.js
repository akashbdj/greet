import React, { Component } from 'react'

class Profile extends Component {
    render() {
        let {
            params: { username }
        } = this.props.match

        return (
            <div className="profile">
                <header>
                    {
                        //<img src="../style/buddha.jpg" />}
                    }
                    <div>Hello, {username}!</div>
                </header>
            </div>
        )
    }
}

export default Profile
