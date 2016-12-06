import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const wrappedUser = {
      user: user
    };

    this.props.processForm(wrappedUser).then(() => this.props.router.push('/'));
  }

  setUsername(e) {
    const username = e.target.value;
    this.setState({ username });
  }

  setPassword(e) {
    const password = e.target.value;
    this.setState({password});
  }

  render() {
    const headerText = (this.props.formType === 'signup') ?
      'Sign Up' : 'Log In';

    const errorEls = this.props.errors.map( (error) => (
      <li>{ error.responseText.base }</li>
      )
    );
    
    return (
      <div>
        <h1>{ headerText }</h1>
        <ul>{ errorEls }</ul>
        <form onSubmit={ this.handleSubmit }>
          Username:
          <input type='text' onChange={this.setUsername} value={ this.username } /><br />
          Password:
          <input type='password' onChange={this.setPassword} value={ this.username } /><br />
          <input type='submit' value= 'Submit' />
          <br />
        </form>
      </div>
    );
  }
}

export default SessionForm;
