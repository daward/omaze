class PathPainter {
  constructor(context, maze, cellSize, padding) {
    this.context = context;
    this.maze = maze;
    this.cellSize = cellSize;
    this.padding = padding ;
  }

  paint(currentCell) {
    this.context.beginPath();
    this.context.fillStyle = "rgba(255, 0, 0, 0.04)";
    this.maze.getReachedNeighbors(currentCell)
      .forEach(neighbor => this.paintPath(currentCell, neighbor));

    this.context.beginPath();
  }

  paintPath(cell1, cell2) {
    var cellSize = this.cellSize;
    var topX = Math.min(cell1.x, cell2.x) * cellSize + this.padding,
      topY = Math.min(cell1.y, cell2.y) * cellSize + this.padding;

    if (cell1.x === cell2.x) {
      // we're moving vertically
      this.context.rect(
        topX,
        topY,
        cellSize - (2 * this.padding),
        cellSize * 2 - (2 * this.padding));
    } else {
      // we're moving horizontally
      this.context.rect(
        topX,
        topY,
        cellSize * 2 - (2 * this.padding),
        cellSize - (2 * this.padding));
    }

    this.context.fill();
  }

  paintCell(cell) {
    var padding = this.padding;
    var cellSize = this.cellSize;
    var walls = this.maze.getWalls(cell);

    var top = walls.top ? padding : padding;
    var left = walls.left ? padding : padding;
    var right = walls.right ? padding : padding;
    var bottom = walls.bottom ? padding : padding;

    this.context.rect(
      (cell.x * cellSize) + left,
      (cell.y * cellSize) + top,
      cellSize - (left + right),
      cellSize - (top + bottom));
    this.context.fill();
  }
}

module.exports = PathPainter;