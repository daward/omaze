import { combineReducers } from 'redux';
import MazeReducer from './mazereducer';
import StyleReducer from './stylereducer';

export default combineReducers({
  mazeTracking: MazeReducer,
  style: StyleReducer
});