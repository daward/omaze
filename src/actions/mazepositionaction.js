const MazePositionAction = (evt) => {
  var coord = {
    x: evt.clientX,
    y: evt.clientY
  };
  return {
    type: 'CHANGE_MAZE_POSITION',
    coordinates: coord
  }
}

export default MazePositionAction;