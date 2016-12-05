import { combineReducers } from 'redux';
import MazeReducer from './mazereducer';
import StyleReducer from './stylereducer';
import PathReducer from './pathreducer';

export default combineReducers({
  mazeTracking: PathReducer,
  mazeStructure: MazeReducer,
  style: StyleReducer
});