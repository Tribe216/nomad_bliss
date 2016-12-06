import React, { Component } from 'react';
import { Link, Button } from 'react-router';

const UserLoggedInGreeting = (username, logout) => {
  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

const UserLoggedOutGreeting = () => {
  return (
    <div>
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
