import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = ( preloadedState={} ) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(ReduxThunk));
};

export default configureStore;
