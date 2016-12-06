import { connect }  from 'react-redux';
import { signup, login } from '../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    errors: state.errors || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.location.pathname === '/login') {
    return {
      formType: 'login',
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      formType: 'signup',
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
