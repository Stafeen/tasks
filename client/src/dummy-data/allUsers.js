import React, { Component } from 'react'

export class allUsers extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
    super(props);
    }
    render() {
        return (
            <ul>
        {this.props.profiles.map(function(pf){
          return <li>{pf.username+": "+pf.last_name+", "+pf.first_name}</li>;
        })}
      </ul>
        )
    }
}

export default allUsers
