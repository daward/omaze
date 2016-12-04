import React, { Component } from 'react';
import WallPainter from './wallpainter.js';

class MazeView extends Component {
  componentDidMount() {
    this.paint();
  }

  paint() {
    this.canvas().clearRect(0, 0, 1520, 1520);

    var style = new this.props.style(this.canvas(),
      this.props.maze,
      this.props.cellSize,
      this.props.padding);

    this.wallStyle = style;
    this.cellStyle = style;

    this.wallPainter = new WallPainter(
      this.canvas(),
      this.props.maze,
      this.props.cellSize,
      this.wallStyle,
      this.cellStyle);

    this.wallPainter.paint();
  }

  canvas() {
    return this.refs.mazeview.getContext('2d');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.style !== prevProps.style) {
      this.paint();
    }
  }

  render() {
    var self = this;
    return (
      <canvas ref="mazeview"
        id="mazeview"
        style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}
        width={1520} height={1520}
        />
    );
  }
}

export default MazeView;