import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: this.props.initialFormType,
      timeStamp: new Date()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.switchLink = this.switchLink.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.processForm = this.processForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    this.setState( { formType: this.props.initialFormType } );
  }

  clearForm() {
    this.setState( { username: "", password: "" } );
  }

  loginGuest() {
    this.processForm({
      username: 'guest',
      password: 'guestymcguestface',
      formType: 'login'
    });
  }

  getWrappedUser(stateData) {
    return {
      user : {
        username: stateData.username,
        password: stateData.password
      }
    };
  }

  processForm(stateData=this.state) {
    if (stateData.formType === 'signup') {
      this.props.processFormSignup(this.getWrappedUser(stateData)).then(
        () => this.props.closeModal());
    } else {
      this.props.processFormLogin(this.getWrappedUser(stateData)).then(
        () => this.props.closeModal());
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.clearForm();
    this.processForm();
  }

  changeFormType(formType) {
    this.props.clearErrors();
    this.setState({ formType, username: "", password: "" });
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
        <div className='session-switcher'>
            No account? <span onClick={ this.changeFormType.bind(this, 'signup')}>
            Click here to sign up
            </span> or <span className="guest-login" onClick={ this.loginGuest } >Log in as Guest</span>
        </div>
      );
    } else {
      return (
        <div className='session-switcher'>
          <span onClick={ this.changeFormType.bind(this, 'login')}>
            Click here to log in
          </span> or <span className="guest-login" onClick={ this.loginGuest } >Log in as Guest</span>
        </div>
      );
    }
  }

  render() {
    const headerText = (this.state.formType === 'signup') ?
      'Sign Up' : 'Login';

    const buttonText = (this.state.formType === 'signup') ?
      'Sign Up!' : 'Log in!';

    const errorEl = (this.props.errors.length > 0) ?
      (<h2 className='session-error'>{ this.props.errors[0] }</h2>) :
      "";

    return (
      <div className='session-box'>
        <h1>{ headerText }</h1>
        { errorEl }
        <form key={this.state.timeStamp} className='session-form' onSubmit={ this.handleSubmit }>
            <label className='session-label'>Username:</label>
            <input
              className='session-input'
              type='text'
              onChange={this.setUsername}
              placeholder="Username"
              value={this.state.username}
               />
          <br />

            <label className='session-label'>Password:</label>
            <input
              className='session-input'
              type='password'
              onChange={this.setPassword}
              placeholder="Password"
              value={this.state.password}
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
