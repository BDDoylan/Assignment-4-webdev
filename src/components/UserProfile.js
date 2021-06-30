import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  render() {
    return (
      <div id='container' className='U-P'>
        <h1 className='title font-link'>User Profile</h1>

        <div id='st' className='font-link'>Username: {this.props.userName}</div>
        <div id='st' className='font-link'>Member Since: {this.props.memberSince}</div>
        <br></br><br></br><br></br>
        <Link id='st' className='font-link'to="/">Return to Home</Link>
      </div>
    );
  }
}

export default UserProfile;
