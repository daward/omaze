import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from 'react-button';

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000000',
  },
  overlay: {
    backgroundColor: 'rgba(128, 128, 128, 0.75)'
  }
};

const headingStyle = {
  textAlign: "center",
  fontSize: "18pt",
  fontWeight: "bold"
}

const buttonTheme = {
    disabledStyle: { background: 'gray'},
    overStyle: { background: 'red'},
    activeStyle: { background: 'red'},
    pressedStyle: {background: 'magenta', fontWeight: 'bold'},
    overPressedStyle: {background: 'purple', fontWeight: 'bold'}
}

class WinnerView extends Component {

  render() {
    return (
      <Modal
        isOpen={this.props.winner}
        style={customStyle}
        >
        <div style={headingStyle}>You Win.</div>

        <img src={"img/winner.jpg"} style={{ height: 200, width: 250 }} />
        <div style={headingStyle}>High Five?</div>
        <br/>
        <div style={headingStyle}>
          <Button onClick={() => this.props.newMaze()}>Next Maze</Button>
        </div>
      </Modal>);
  }
}

export default WinnerView;