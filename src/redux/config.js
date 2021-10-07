import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocksReducer from './rocketsAPI';
import missionsReducer from './missionsAPI';

const reducers = combineReducers({
  rock: rocksReducer,
  missions: missionsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
