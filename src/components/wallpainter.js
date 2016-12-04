class WallPainter {
  constructor(context, maze, cellSize, wallStyle, cellStyle) {
    this.context = context;
    this.maze = maze;
    this.cellSize = cellSize;
    this.wallStyle = wallStyle;
    this.cellStyle = cellStyle;
  }

  paintWalls() {
    var cellSize = this.cellSize;
    var maze = this.maze;
    var i, j;
    for (i = 0; i < maze.width; i++) {
      for (j = 0; j < maze.height; j++) {
        this.cellStyle.paint(i, j);
      }
    }

    for (i = 0; i < maze.width; i++) {
      for (j = 0; j < maze.height; j++) {
        if (maze.data.get(i, j).south) {
          this.wallStyle.paintSouth(i, j);
        }
        if (maze.data.get(i, j).east) {
          this.wallStyle.paintEast(i, j);
        }
      }
    }

    this.context.beginPath();
    this.context.moveTo(0, maze.height * cellSize);
    this.context.lineTo(maze.width * cellSize, maze.height * cellSize);

    this.context.moveTo(maze.width * cellSize, 0);
    this.context.lineTo(maze.width * cellSize, (maze.height - 1) * cellSize);
    this.context.stroke();
  }

  paint() {
    
    if(this.cellStyle.background) {
      this.cellStyle.background(() => this.paintWalls());
    } else {
      this.paintWalls();
    }
  }
}
module.exports = WallPainter;