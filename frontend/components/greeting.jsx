import React, { Component } from 'react';
import { Link, Button } from 'react-router';

const UserLoggedInGreeting = (username, logout) => {
  return (
    <div className='auth_box group'>
      <h1>{username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

const UserLoggedOutGreeting = () => {
  return (
    <div className='auth_box group'>
      <Link to="/signup" className="signup-box red_box">Join</Link>
      <Link to="/login" className="login-box white_box">Login</Link>      
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
