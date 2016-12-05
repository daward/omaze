import initialMaze from '../mazeinit';

const PathReducer = (state, action) => {
  if (!state) {
    state = {
      currentCell: {
        x: 0,
        y: 0
      },
      winner: false
    };
  }
  switch (action.type) {
    case 'CHANGE_MAZE_POSITION':
      return Object.assign({}, state, {
        currentCell: action.currentCell,
        winner: action.winner
      });

    case 'START_NEW_MAZE':
      return Object.assign({}, state, {
        currentCell: {
          x: 0,
          y: 0
        },
        winner: false
      });

    default:
      return state;
  }
};

export default PathReducer;