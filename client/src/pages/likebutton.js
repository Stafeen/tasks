import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Style.css";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';


import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faUserFriends,
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div className = "social-container">
      <h3>Follow Me</h3>
  
    {/*   <a href="https://www.openrecognition.org/"
    className="Follow to TRUST"
 >
    <FontAwesomeIcon icon={faYoutube} size="2x" />
 </a> */}

<IconButton aria-label="delete">
  <SvgIcon>
    <svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
		</svg>
  </SvgIcon>
</IconButton>

    {/*  <a
    href="https://www.youtube.com/"
    className="youtube social"
 >
    <FontAwesomeIcon icon={faYoutube} size="2x" />
 </a>

  <a
  href="https://www.facebook.com/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/OpenRecognition" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a> */}
    </div>
  );
}

















import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import "./Style.css";
import IconButton from '@material-ui/core/IconButton';
import "./Style.css";
import SvgIcon from '@material-ui/core/SvgIcon';
import { style } from '@material-ui/system';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
}




/* export default function SocialFollow() {
  
  const socialData = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password,
 };


  console.log(socialData)
  fetch('http://localhost:3000/api/profile/add', {
    method: 'POST',
    body: JSON.stringify(socialData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => console.log(res))
   */
  
  return (
    <div className = "social-container">
      
      <button>
        Accept
      </button>
      <button>
        Reject
      </button>

      <h3>Follow Me</h3>

      <IconButton aria-label="delete">
  <SvgIcon>
    <svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
		</svg>
  </SvgIcon>
</IconButton>

    </div>
  );

  export default App;


/* SocialFollow.propTypes = {
  classes: PropTypes.object.isRequired}


export default withStyles(style)(SocialFollow); */




/* import React from 'react';

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        Trust: false,
      
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
 
    
    handleClick() {
        
      this.setState({
        liked: !this.state.liked,
        

      })

      
      document.getElementById('trustbutton').style.color="green"
      

      
    } */
    // button{
  
    //     color: white;
    //   }
    //   #trustbutton:focus{
    //     background-color: #2ecc71;
    //     color: white;
        
    //   }
      
      
      
      


/* 
    render() {
      const text = this.state.liked ? 'Trust' : 'don\'t trust';
      const label = this.state.liked ? 'Trust' : 'Untrust'
      return (
        <div className="customContainer">
          <button name="button"  id='trustbutton' className="buttonlike" onClick={this.handleClick}>
            {label}</button>
          <p id='para'>
            You  {text} this person.
          </p>
        </div>
      );
    }
  }
  
 export default LikeButton */