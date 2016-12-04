class RoadStyle {
  constructor(context, maze, cellSize, padding) {
    this.context = context;
    this.cellSize = cellSize;
    this.padding = padding;
    this.maze = maze;
    this.sidewalkSize = 10;
  }

  paint(x, y) {
    this.context.fillStyle = "black";
    this.context.fillRect(
      x * this.cellSize,
      y * this.cellSize,
      this.cellSize,
      this.cellSize);

    this.context.beginPath();
    this.context.strokeStyle = "rgba(255,255,0, .5)";
    var distance = this.cellSize / 4;

    var walls = this.maze.getCellWalls({ x: x, y: y });
    this.context.lineWidth = 2;
    if (!walls.left) {
      var yCoord = y * this.cellSize + this.cellSize / 2;
      var xCoord = x * this.cellSize + distance;
      this.context.moveTo(xCoord, yCoord);
      this.context.lineTo(xCoord + distance, yCoord);
    }

    if (!walls.right) {
      var yCoord = y * this.cellSize + this.cellSize / 2;
      var xCoord = x * this.cellSize + distance * 3;
      this.context.moveTo(xCoord, yCoord);
      this.context.lineTo(xCoord + distance, yCoord);
    }

    if (!walls.top) {
      var xCoord = x * this.cellSize + this.cellSize / 2;
      var yCoord = y * this.cellSize + distance;
      this.context.moveTo(xCoord, yCoord);
      this.context.lineTo(xCoord, yCoord + distance);
    }

    if (!walls.bottom) {
      var xCoord = x * this.cellSize + this.cellSize / 2;
      var yCoord = y * this.cellSize + distance * 3;
      this.context.moveTo(xCoord, yCoord);
      this.context.lineTo(xCoord, yCoord + distance);
    }

    this.context.stroke();
  }

  paintSouth(x, y) {
    this.context.fillStyle = "silver";
    
    for(var i = 0; i < this.cellSize / this.sidewalkSize; i++) {
      this.context.fillRect(
      x * this.cellSize - this.sidewalkSize / 2, 
      y * this.cellSize + i * this.sidewalkSize,
      this.sidewalkSize - 1, this.sidewalkSize - 1);
    }
    
    // this.context.beginPath();
    // this.context.lineWidth = 3;
    // this.context.moveTo(i * this.cellSize, j * this.cellSize);
    // this.context.strokeStyle = "white";
    // this.context.lineTo(i * this.cellSize, (j + 1) * this.cellSize);
    // this.context.stroke();
  }

  paintEast(x, y) {

    this.context.fillStyle = "silver";
    
    for(var i = 0; i < this.cellSize / this.sidewalkSize; i++) {
      this.context.fillRect(
      x * this.cellSize + i * this.sidewalkSize, 
      y * this.cellSize - this.sidewalkSize / 2,
      this.sidewalkSize - 1, this.sidewalkSize - 1);
    }

    // this.context.beginPath();
    // this.context.lineWidth = 3;
    // this.context.moveTo(i * this.cellSize, j * this.cellSize);
    // this.context.strokeStyle = "white";
    // this.context.lineTo((i + 1) * this.cellSize, j * this.cellSize);
    // this.context.stroke();
  }
}

module.exports = RoadStyle; 