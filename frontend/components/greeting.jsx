import React, { Component } from 'react';
import { Link, Button } from 'react-router';

const UserLoggedInGreeting = (username, logout) => {
  const divStyle = {
            backgroundImage: 'url(' + window.profile_pic + ')'
        }
  return (
    <div className='auth-box group'>
      <Link className="profile-pic" to="/profile" style={divStyle}>
        <div />
      </Link>
      <Link to="" className="auth-button red-box" onClick={logout} >Log Out</Link>
    </div>
  );
}

const UserLoggedOutGreeting = () => {
  return (
    <div className='auth-box group'>
      <Link to="/signup" className='auth-button red-box'>Join</Link>
      <Link to="/login" className='auth-button white-box'>Login</Link>
    </div>
  );
}

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return UserLoggedInGreeting(currentUser.username, logout);
  } else {
    return UserLoggedOutGreeting();
  }
} //

export default Greeting;
