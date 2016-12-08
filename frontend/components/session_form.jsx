import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: this.props.initialFormType
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.switchLink = this.switchLink.bind(this);
  }

  componentDidMount() {
    this.setState( { formType: this.props.initialFormType } );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const wrappedUser = {
      user: user
    };
    if (this.state.formType === 'signup') {
      this.props.processFormSignup(wrappedUser).then(
        () => this.props.closeModal());
    } else {
      this.props.processFormLogin(wrappedUser).then(
        () => this.props.closeModal());
    }
  }

  changeFormType(formType) {
    this.setState({ formType });
  }

  setUsername(e) {
    const username = e.target.value;
    this.setState({ username });
  }

  setPassword(e) {
    const password = e.target.value;
    this.setState({password});
  }

  switchLink() {
    if (this.state.formType === 'login') {
      return (
        <div className='session-switcher' onClick={ this.changeFormType.bind(this, 'signup') }>
          Don't have an account? Click here to sign up.
        </div>
      );
    } else {
      return (
        <div className='session-switcher' onClick={ this.changeFormType.bind(this, 'login') }>
          Already have an account? Click here to log in.
        </div>
      );
    }
  }

  render() {
    const headerText = (this.state.formType === 'signup') ?
      'Sign Up' : 'Login';

    const buttonText = (this.state.formType === 'signup') ?
      'Sign Up!' : 'Log in!';

    const errorEl = (<h2>{this.props.errors[0]}</h2>);

    return (
      <div className='session-box'>
        <h1>{ headerText }</h1>
        <div className='session-error'>{ errorEl }</div>
        <form className='session-form' onSubmit={ this.handleSubmit }>
            <label className='session-label'>Username:</label>
            <input
              className='session-input'
              type='text'
              onChange={this.setUsername}
              placeholder="Username" />
          <br />

            <label className='session-label'>Password:</label>
            <input
              className='session-input'
              type='password'
              onChange={this.setPassword}
              placeholder="Password"
             />
          <br />
          <div className='session-bottom'>
            <input className='session-submit' type='submit' value= { buttonText } />
          </div>

          { this.switchLink() }
        </form>
      </div>
    );
  }
}

export default SessionForm;

// <label className='session-label'>Username:</label>
// <label className='session-label'>Password:</label>
