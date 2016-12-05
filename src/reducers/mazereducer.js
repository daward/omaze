import initialMaze from '../mazeinit';
var count = 0;
const MazeReducer = (state, action) => {
  if (!state) {
    state = {
      cellSize: 30,
      maze: initialMaze()
    };
  }
  switch (action.type) {
    case 'START_NEW_MAZE':
      var maze = initialMaze();
      maze.id = count;
      count++;
      return Object.assign({}, state, {
        maze: maze
      });

    default:
      return state;
  }
};

export default MazeReducer;