import { connect } from 'react-redux';
import Filters from './filters';
import { updateSearchResults} from '../../actions/filters_actions';
import { updateTags} from '../../actions/tag_actions';

const mapStateToProps = (state) => {
  return {
    tags: state.tags.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchResults: (searchFilters) =>
      dispatch(updateSearchResults(searchFilters)),
    updateTags: () => dispatch(updateTags())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
