import { connect } from 'react-redux';
import Detail from './detail';

const mapStateToProps = (state) => {
  return {
    cityDetails: state.city_detail,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
