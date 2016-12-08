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

    this.props.processForm(wrappedUser).then(() => this.props.closeModal());
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

    const errorEl = (<h2>{this.props.errors[0]}</h2>);


    return (
      <div className='session-box'>
        <h1>{ headerText }</h1>
        <div className='session-error'>{ errorEl }</div>
        <form className='session-form' onSubmit={ this.handleSubmit }>
            <label className='session-label'>Username:</label>
            <input className='session-input' type='text' onChange={this.setUsername} />
          <br />

            <label className='session-label'>Password:</label>
            <input className='session-input' type='password' onChange={this.setPassword} />
          <br />
          <div className='session-bottom'>
            <input className='session-submit' type='submit' value= 'Log In!' />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

// <label className='session-label'>Username:</label>
// <label className='session-label'>Password:</label>
