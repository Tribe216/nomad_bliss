import React, { Component } from 'react';
import { Link, Button } from 'react-router';

const UserLoggedInGreeting = (username, logout) => {
  return (
    <div className='auth_box'>
      <h1>{username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

const UserLoggedOutGreeting = () => {
  return (
    <div className='auth_box'>
      <Link to="/login">Login</Link><br />
      <Link to="/signup">Sign Up</Link>
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
