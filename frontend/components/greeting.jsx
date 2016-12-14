import React, { Component } from 'react';
import { Link, Button } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
import customStyles from './modal_style';

class Greeting extends Component {

  constructor(props) {
    super(props);
    this.userLoggedInGreeting = this.userLoggedInGreeting.bind(this);
    this.userLoggedOutGreeting = this.userLoggedOutGreeting.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);

    this.state = {
      modalIsOpen: false,
      modalFormType: null
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  userLoggedInGreeting (currentUser, logout) {
    const divStyle = {
      backgroundImage: 'url(' + currentUser.user.image_url + ')'
    };

    return (
      <div className='auth-box group'>
        <div className="profile-pic" to="/profile" style={divStyle}>
          <div />
        </div>
        <button className="auth-button red-box" onClick={this.props.logout} >Log Out</button>
      </div>
    );
  }

  userLoggedOutGreeting () {
    return (
      <div className='auth-box group'>
        <button onClick={this.openModal.bind(this, 'signup')} className='auth-button red-box'>Join</button>
        <button onClick={this.openModal.bind(this, 'login')} className='auth-button white-box'>Login</button>
      </div>
    );
  }

  openModal(modalFormType)  {
    this.setState({modalIsOpen: true, modalFormType});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  authBox(currentUser) {
    if (this.props.currentUser) {
      return this.userLoggedInGreeting(this.props.currentUser, this.props.logout);
    } else {
      return this.userLoggedOutGreeting();
    }
  }

  afterOpenModal() {
  }

  render() {
    return (
      <div>
        {this.authBox(this.props.currentUser)}
        <Modal
          animationType={"fade"}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <SessionFormContainer formType={this.state.modalFormType} closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default Greeting;
