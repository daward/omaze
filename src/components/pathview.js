import React, { Component } from 'react';
import WallPainter from './wallpainter.js';
import PathPainter from './pathpainter.js';

class PathView extends Component {
  componentDidMount() {
    this.pathPainter = new PathPainter(
      this.canvas(),
      this.props.maze,
      this.props.cellSize,
      this.props.padding);
    this.sendEvent();
  }

  sendEvent() {
    setTimeout(() => {
      if (this.event) {
        this.props.mouseMove(this.event);
      }
      this.sendEvent();
    }, 30);
  }

  setEvent(evt) {
    var rect = evt.target.getBoundingClientRect();
    this.event = {
      clientX: evt.clientX - rect.left,
      clientY: evt.clientY - rect.top
    };
  }

  canvas() {
    return this.refs.pathview.getContext('2d');
  }

  render() {
    var self = this;
    return (
      <canvas id="pathview" ref="pathview"
        style={{position: "absolute", left: 0, top: 0, zIndex: 1}}
        width={1520} height={1520}
        onMouseMove={evt => self.setEvent(evt)}
        onTouchMove={evt => {
          evt.preventDefault(); self.setEvent(evt.touches[0]);
        } }
        />
    );
  }

  shouldComponentUpdate() {
    this.pathPainter.paint(this.props.currentCell);
    return false;
  }
}

export default PathView;