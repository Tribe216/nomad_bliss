import { connect }  from 'react-redux';
import { signup, login } from '../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => {

  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.formType === 'login') {
    return {
      formType: 'login',
      closeModal: ownProps.closeModal,
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      formType: 'signup',
      closeModal: ownProps.closeModal,
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
