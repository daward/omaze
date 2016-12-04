import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import newMazeAction from '../actions/newmazeaction';
import WinnerView from '../components/winnerview';

const mapStateToProps = (state) => {
  return {
    winner: state.mazeTracking.winner
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ newMaze: newMazeAction }, dispatch);
};

const Winner = connect(
  mapStateToProps,
  mapDispatchToProps
)(WinnerView);

export default Winner;