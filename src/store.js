import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from './logger';
import rootReducer from './reducers/index';

let store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

export default store;