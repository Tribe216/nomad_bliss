import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import filtersReducer from './filters_reducer';
import tagReducer from './tag_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  results: filtersReducer,
  tags: tagReducer
});

export default rootReducer;
