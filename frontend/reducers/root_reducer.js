import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import filtersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  results: filtersReducer
});

export default rootReducer;
