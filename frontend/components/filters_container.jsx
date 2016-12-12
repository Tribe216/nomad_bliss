import { connect } from 'react-redux';
import Filters from './filters';
import { updateSearchResults } from '../actions/filters_actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchResults: (searchFilters) =>
      dispatch(updateSearchResults(searchFilters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
