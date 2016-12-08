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
  let formProps = {
    closeModal: ownProps.closeModal,
    processFormLogin: (user) => dispatch(login(user)),
    processFormSignup: (user) => dispatch(signup(user))
  };
  
  if (ownProps.formType === 'login') {
    return Object.assign({}, formProps, {initialFormType: 'login'});
  } else {
    return Object.assign({}, formProps, {initialFormType: 'signup'});
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
