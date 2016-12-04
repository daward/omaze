class BasicStyle {
  constructor(context, maze, cellSize, padding) {
    this.context = context;
    this.cellSize = cellSize;
    this.padding = padding;
    this.maze = maze;
  }

  paint(x, y) {
    
  }

  paintSouth(x, y) {
    this.context.beginPath();
    this.context.lineWidth = 3;
    this.context.moveTo(x * this.cellSize, y * this.cellSize);
    this.context.strokeStyle = "white";
    this.context.lineTo(x * this.cellSize, (y + 1) * this.cellSize);
    this.context.stroke();
  }

  paintEast(x, y) {
    this.context.beginPath();
    this.context.lineWidth = 3;
    this.context.moveTo(x * this.cellSize, y * this.cellSize);
    this.context.strokeStyle = "white";
    this.context.lineTo((x + 1) * this.cellSize, y * this.cellSize);
    this.context.stroke();
  }
}

module.exports = BasicStyle; 