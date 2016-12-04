import CurvyWalls from '../mazestyle/curvywalls.js';
import StraightWalls from '../mazestyle/straightwalls.js';
import RoadStyle from '../mazestyle/roadstyle.js';
import RiverStyle from '../mazestyle/riverstyle.js';
import BasicStyle from '../mazestyle/basicstyle.js';

const StyleSet = {
  Water: RiverStyle,
  Road: RoadStyle,
  Basic: BasicStyle
};

const StyleReducer = (state, action) => {
  if (!state) {
    state = {
      style: RiverStyle
    };
  }
  switch (action.type) {
    case 'CHANGE_MAZE_STYLE':
      var style = StyleSet[action.style];
      if (style) {
        return Object.assign({}, state, {
          style: style
        });
      }
      return state;

    default:
      return state;
  }
};

export default StyleReducer;