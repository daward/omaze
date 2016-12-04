import _ from 'lodash';
import Segment from './segment.js';

class RiverStyle {
  constructor(context, maze, cellSize, padding) {
    this.context = context;
    this.cellSize = cellSize;
    this.padding = padding;
    this.maze = maze;
    this.width = 6;
  }

  paint(x, y) {

    this.context.beginPath();
    this.context.strokeStyle = "rgba(16,78,139, 1)";

    var walls = this.maze.getCellWalls({ x: x, y: y });
    this.context.lineWidth = this.width;
    var segments = [];

    var addSegment = (x, y, horizontal, first) => {
      segments.push(new Segment(this.cellSize, x, y, horizontal, first));
    };

    if (!walls.left) {
      addSegment(x, y, true, true);
    }

    if (!walls.right) {
      addSegment(x, y, true, false);
    }

    if (!walls.top) {
      addSegment(x, y, false, true);
    }

    if (!walls.bottom) {
      addSegment(x, y, false, false);
    }

    _.forEach(segments, segment => {
      var coords = segment.coords();
      this.context.moveTo(coords.start.x, coords.start.y);
      var quadPoint = segment.quadPoint();
      this.context.quadraticCurveTo(
        quadPoint.x, quadPoint.y, coords.stop.x + 2, coords.stop.y + 2);
    });

    this.context.stroke();
  }

  paintSouth(x, y) { }

  paintEast(x, y) { }

  background(callback) {
    var img = new Image();
    img.src = 'img/dirt2.jpg';

    img.onload = () => {
      var pattern = this.context.createPattern(img, 'repeat');
      this.context.fillStyle = pattern;
      this.context.fillRect(0, 0,
        this.maze.width * this.cellSize,
        this.maze.height * this.cellSize);

      callback();
    };
  }
}

module.exports = RiverStyle; 