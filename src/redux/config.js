import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocksReducer from './API';

const reducers = combineReducers({ rock: rocksReducer });

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
