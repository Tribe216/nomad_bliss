import { connect } from 'react-redux';
import Results from './results';
import { updateCityDetail } from '../../actions/detail_actions';

const mapStateToProps = (state) => {
  return {
    results: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCityDetail: (cityId) => dispatch(updateCityDetail(cityId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
