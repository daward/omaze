class StraightWalls {
  constructor(context, cellSize) {
    this.context = context;
    this.cellSize = cellSize;
  }

  paintSouth(i, j) {
    var cellSize = this.cellSize;
    this.context.lineTo(i * cellSize, (j + 1) * cellSize);
  }

  paintEast(i, j) {
    var cellSize = this.cellSize;
    this.context.lineTo((i + 1) * cellSize, j * cellSize);
  }
}
module.exports = StraightWalls;