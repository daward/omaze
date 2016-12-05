import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mazePositionAction from '../actions/mazepositionaction';
import MazeView from '../components/mazeview';
import PathView from '../components/pathview';
import React, { Component } from 'react';

class Maze extends Component {
  render() {
    return (
      <div style={{position: "relative"}}>
        <MazeView
          maze={this.props.maze}
          cellSize={this.props.cellSize}
          style={this.props.style}
          padding={8}>
        </MazeView>
        <PathView
          maze={this.props.maze}
          cellSize={this.props.cellSize}
          currentCell={this.props.currentCell}
          mouseMove={this.props.mouseMove}
          padding={8}>
        </PathView>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    maze: state.mazeStructure.maze,
    cellSize: state.mazeStructure.cellSize,
    currentCell: state.mazeTracking.currentCell,
    winner: state.mazeTracking.winner,
    style: state.style.style
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    mouseMove: mazePositionAction
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maze);