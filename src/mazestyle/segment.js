import _ from 'lodash';

class Segment {
  constructor(cellSize, x, y, horizontal, first) {
    this.cellSize = cellSize;
    this.x = x;
    this.y = y;
    this.first = first;
    this.horizontal = horizontal;
  }

  coords() {
    var retVal = {
      start: {},
      stop: {}
    };
    if (this.horizontal) {
      retVal.start.y = this.y * this.cellSize + this.cellSize / 2;
      retVal.stop.y = retVal.start.y;
      if (this.first) {
        retVal.start.x = this.x * this.cellSize;
      } else {
        retVal.start.x = this.x * this.cellSize + this.cellSize / 2;
      }
      retVal.stop.x = retVal.start.x + this.cellSize / 2;
    } else {
      retVal.start.x = this.x * this.cellSize + this.cellSize / 2;
      retVal.stop.x = retVal.start.x;
      if (this.first) {
        retVal.start.y = this.y * this.cellSize;
      } else {
        retVal.start.y = this.y * this.cellSize + this.cellSize / 2;
      }
      retVal.stop.y = retVal.start.y + this.cellSize / 2;
    }
    return retVal;
  }

  quadPoint() {
    var coords = this.coords();
    var retVal = {};
    var bend = 15;
    if(this.horizontal) {
      retVal.x = _.random(coords.start.x + 1, coords.stop.x - 1);
      retVal.y = _.random(coords.start.y + bend, coords.start.y - bend);
    } else {
      retVal.y = _.random(coords.start.y + 1, coords.stop.y - 1);
      retVal.x = _.random(coords.start.x + bend, coords.start.x - bend);
    }

    return retVal;
  }
}

module.exports = Segment;