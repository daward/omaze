import initialMaze from '../mazeinit';
const MazeReducer = (state, action) => {
  if (!state) {
    state = {
      currentCell: {
        x: 0,
        y: 0
      },
      cellSize: 30,
      winner: false,
      maze: initialMaze()
    }
  }
  switch (action.type) {
    case 'START_NEW_MAZE':
      return Object.assign({}, state, {
        currentCell: {
          x: 0,
          y: 0
        },
        winner: false,
        maze: initialMaze()
      });

    case 'CHANGE_MAZE_POSITION':
      var currentCell = {
        x: Math.floor(action.coordinates.x / state.cellSize),
        y: Math.floor(action.coordinates.y / state.cellSize)
      }

      if (state.maze.attemptReach(currentCell)) {
        var winner = state.winner || (state.maze.width - 1 === currentCell.x
          && state.maze.height - 1 === currentCell.y);

        return Object.assign({}, state, {
          currentCell: currentCell,
          winner: winner
        });
      }
      return state;

    default:
      return state;
  }
}

export default MazeReducer;