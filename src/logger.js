export default function createLogger({ getState }) {
  return (next) =>
    (action) => {
      if (action.type === "CHANGE_MAZE_POSITION") {
        const state = getState();
        var structure = state.mazeStructure;
        var maze = structure.maze;

        var currentCell = {
          x: Math.floor(action.coordinates.x / structure.cellSize),
          y: Math.floor(action.coordinates.y / structure.cellSize)
        };

        // if we can reach the cell, then update the current cell
        // otherwise keep the status quo
        if (maze.canReach(currentCell)) {
          action.currentCell = currentCell;
          action.winner = maze.width - 1 === currentCell.x
            && maze.height - 1 === currentCell.y;

          next(action);
        }
        return;
      }
      next(action);
    };
}