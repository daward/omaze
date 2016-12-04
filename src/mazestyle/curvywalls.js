import _ from "lodash";
class CurvyWalls {
  constructor(context, cellSize, padding) {
    this.context = context;
    this.cellSize = cellSize;
    this.padding = padding;
  }

  paintSouth(i, j) {
    var cellSize = this.cellSize;
    var padding = this.padding;
    var start = j * cellSize;
    var finish = (j + 1) * cellSize;

    this.context.quadraticCurveTo(
      i * cellSize + _.random(-cellSize + padding, cellSize - padding),
      (start + finish) / 2,
      i * cellSize,
      finish);
  }

  paintEast(i, j) {
    var cellSize = this.cellSize;
    var padding = this.padding;
    var start = i * cellSize;
    var finish = (i + 1) * cellSize;

    this.context.quadraticCurveTo(
      (start + finish) / 2,
      j * cellSize + _.random(-cellSize + padding, cellSize - padding),
      finish,
      j * cellSize);
  }
}
module.exports = CurvyWalls;