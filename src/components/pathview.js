import React, { Component } from 'react';
import PathPainter from './pathpainter.js';

class PathView extends Component {
  componentDidMount() {
    this.pathPainter = new PathPainter(
      this.canvas(),
      this.props.maze,
      this.props.cellSize,
      this.props.padding);
    // this.sendEvent();
  }

  // sendEvent() {
  //   setTimeout(() => {
  //     if (this.event) {
  //       this.props.mouseMove(this.event);
  //     }
  //     this.sendEvent();
  //   }, 30);
  // }

  setEvent(evt) {
    var rect = evt.target.getBoundingClientRect();
    this.event = {
      clientX: evt.clientX - rect.left,
      clientY: evt.clientY - rect.top
    };
    this.props.mouseMove(this.event);
  }

  canvas() {
    return this.refs.pathview.getContext('2d');
  }

  render() {
    var self = this;
    return (
      <canvas id="pathview" ref="pathview"
        style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}
        width={1520} height={1520}
        onMouseMove={evt => self.setEvent(evt)}
        onTouchMove={evt => {
          evt.preventDefault(); self.setEvent(evt.touches[0]);
        } }
        />
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.maze !== prevProps.maze) {
      this.canvas().clearRect(0, 0, 1520, 1520);
      this.pathPainter = new PathPainter(
        this.canvas(),
        this.props.maze,
        this.props.cellSize,
        this.props.padding);
    }
    this.pathPainter.paint(this.props.currentCell);
  }
}

export default PathView;