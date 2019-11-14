import React, { Component } from 'react'
import axios from 'axios'

import "../App.css"

export default class allProfiles extends Component {
    constructor() {
        super()
        this.state = {
            profiles: []
        }
    }

    async componentDidMount() {
        const allUsers = await axios.get('http://localhost:3000/api/profile/all')
        console.log(allUsers.data)
        this.setState({ profiles: [...allUsers.data] })
    }

    render() {
        return (
            <div className="allProfiles">
                {this.state.profiles.map((user, key) => {
                    return (<div className="profile-card" key={key}>
                        <p>First Name : {user.firstName}</p>
                        <p>Last Name : {user.lastName}</p>
                        <p>User Name : {user.username}</p>
                        <p>email : {user.email}</p>
                        <p>location : {user.location}</p>
                        <img src={user.photo} alt={user.firstName + ' ' + user.lastName} />
                    </div>)
                })}
            </div>
        )
    }
}
