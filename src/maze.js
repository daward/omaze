import ndarray from "ndarray";
import _ from "lodash";

class Maze {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    let initial = [];
    for (var i = 0; i < width * height; i++) {
      initial.push({ south: true, east: true, visited: false });
    }

    this.data = ndarray(initial, [width, height]);
  }

  getWall(cell1, cell2) {
    var diffX = cell1.x - cell2.x;
    var diffY = cell1.y - cell2.y;
    var cell1Data = this.data.get(cell1.x, cell1.y);
    var cell2Data = this.data.get(cell2.x, cell2.y);

    var wall = {};
    var wallInit = (cell, direction) => {
      wall.set = (value) => _.set(cell, direction, value);
      wall.get = () => _.get(cell, direction, true);
    };

    if (diffY < 0) {
      // the path was below us
      wallInit(cell2Data, "east");
    } else if (diffY > 0) {
      // it was above us
      wallInit(cell1Data, "east");
    } else if (diffX < 0) {
      // it was from the left
      wallInit(cell2Data, "south");
    } else if (diffX > 0) {
      // it was from the right
      wallInit(cell1Data, "south");
    }
    return wall;
  } 

  visitFrom(x, y, previousX, previousY) {
    var current = this.data.get(x, y);
    current.visited = true;

    var wall = this.getWall({ x: x, y: y }, { x: previousX, y: previousY });
    wall.set(false);
  }

  visit(x, y) {
    // if we have visited the space to the left, break
    // its southward wall
    this.data.get(x, y).visited = true;

    if (x > 0 && this.data.get(x - 1, y).visited) {
      this.data.get(x - 1, y).south = false;
    }
    // if we have visited the space to the right, break
    // our southward wall
    if (x < this.width && this.data.get(x + 1, y).visited) {
      this.data.get(x, y).south = false;
    }

    // if we have visited the space below, break
    // its eastward wall
    if (y < this.height && this.data.get(x, y + 1).visited) {
      this.data.get(x, y).east = false;
    }

    // if we have visited the space above, break
    // our eastward wall
    if (y > 0 && this.data.get(x, y - 1).visited) {
      this.data.get(x, y - 1).east = false;
    }
  }

  buildBranch(x, y) {
    var neighbors = this.getUnvistedNeighbors(x, y);

    if (neighbors.length) {
      var choice = neighbors[_.random(0, neighbors.length - 1)];
      this.visitFrom(choice.x, choice.y, x, y);
      this.buildBranch(choice.x, choice.y);
    }
  }

  buildBranches() {
    var sources = this.getVisited();
    var iterations = 10000;
    while (sources.length && iterations) {
      var source = sources[_.random(0, sources.length - 1)];
      this.buildBranch(source.x, source.y);
      sources = this.getVisited();
      iterations--;
    }
    this.tidy();
  }

  tidy() {
    this.data.get(0, 0).south = false;
  }

  getVisited() {
    var visited = [];
    for (var x = 0; x < this.width; x++) {
      for (var y = 0; y < this.height; y++) {
        if (this.data.get(x, y).visited) {
          visited.push({ x: x, y: y });
        }
      }
    }
    return visited;
  }

  getUnvistedNeighbors(x, y) {
    return _(this.getNeighborCoords(x, y))
      .map(coord => {
        return {
          data: this.data.get(coord.x, coord.y),
          y: coord.y,
          x: coord.x
        };
      })
      .filter(neighbor => !neighbor.data.visited)
      .value();
  }

  getNeighborCoords(x, y) {
    var coords = [];
    coords.push({ x: x - 1, y: y });
    coords.push({ x: x + 1, y: y });
    coords.push({ x: x, y: y - 1 });
    coords.push({ x: x, y: y + 1 });
    return _.filter(coords,
      coord => coord.x >= 0 && coord.y >= 0 && coord.x < this.width && coord.y < this.height);
  }

  canReach(cell) {
    // off the grid
    if(!this.data.get(cell.x, cell.y)) {
      return false;
    }

    // if there is a neighbor we have already reached
    // then we can get here
    var neighbors = this.getReachedNeighbors(cell);

    // if we have a neighbor we've reached before,
    // then mark this one as reached
    if (neighbors.length) {
      this.data.get(cell.x, cell.y).reached = true;
    }
    return neighbors.length;
  }

  getReachedNeighbors(cell) {
    return _(this.getNeighborCoords(cell.x, cell.y))
      .filter(neighbor =>
        this.data.get(neighbor.x, neighbor.y).reached &&
        !this.getWall(cell, neighbor).get()
      ).value();
  }

  getNeighbors (cell) {
    return _(this.getNeighborCoords(cell.x, cell.y))
      .filter(neighbor =>
        !this.getWall(cell, neighbor).get()
      ).value();
  }

  getWalls(cell) {
    var walls = {};
    var neighbors = this.getReachedNeighbors(cell);
    walls.left = !_.filter(neighbors, neighbor => neighbor.x < cell.x).length;
    walls.right = !_.filter(neighbors, neighbor => neighbor.x > cell.x).length;
    walls.top = !_.filter(neighbors, neighbor => neighbor.y < cell.y).length;
    walls.bottom = !_.filter(neighbors, neighbor => neighbor.y > cell.y).length;
    return walls;
  }

  getCellWalls(cell) {
    var walls = {};
    var neighbors = this.getNeighbors(cell);
    walls.left = !_.filter(neighbors, neighbor => neighbor.x < cell.x).length;
    walls.right = !_.filter(neighbors, neighbor => neighbor.x > cell.x).length;
    walls.top = !_.filter(neighbors, neighbor => neighbor.y < cell.y).length;
    walls.bottom = !_.filter(neighbors, neighbor => neighbor.y > cell.y).length;
    return walls;
  }
}

module.exports = Maze;