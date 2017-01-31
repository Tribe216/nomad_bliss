import { connect } from 'react-redux';
import { turnOnReviewMode, turnOffReviewMode }
  from '../../actions/session_actions';

import Detail from './detail';

const mapStateToProps = (state) => {
  return {
    cityDetails: state.city_detail,
    loggedIn: Boolean(state.session.currentUser),
    reviewMode: state.session.reviewMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    turnOnReviewMode: () => dispatch(turnOnReviewMode()),
    turnOffReviewMode: () => dispatch(turnOffReviewMode())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
