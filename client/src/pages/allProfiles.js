import React, { Component } from 'react'
import axios from 'axios'
import { userInfo } from 'os'

export default class allProfiles extends Component {
    constructor(){
        super()
        this.state = {
            profiles: [
                // delete this
                {
                        firstName: 'Stafeen',
                        lastName: 'Farzana',
                        username: 'farzu',
                        email: 'email@email',
                        location: 'brussels',
                        photo: 'https://sdnkfklsf.com'
            }
        ]
        //untill this line
        }
    }
//uncomment this

   // async componentDidMount () {
    //   const allUsers = await axios.get('http://localhost:3000/api/profile/all')
    //    this.setState({profiles: allUsers})
   // }

render(){
    return(
        <div>
        {this.state.profiles.map((user, key) => {
           return ( <div key={key}>
                <p>First Name : {user.firstName}</p>
                <p>Last Name : {user.lastName}</p>
                <p>User Name : {user.username}</p>
                <p>email : {user.email}</p>
                <p>location : {user.location}</p>
                <img src={user.photo} alt={user.firstName + ' '+ user.lastName} />
            </div>)
        })}
        </div>
    )
}
}
