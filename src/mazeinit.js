var Maze = require('./maze.js'),
  _ = require('lodash');

module.exports = () => {
  var maze = new Maze(25, 25);
  var start = maze.data.get(0, 0);
  start.visited = true;
  start.reached = true;
  maze.buildBranches();
  return maze;
};