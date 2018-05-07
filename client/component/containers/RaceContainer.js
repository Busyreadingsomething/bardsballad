import { connect } from 'react-redux';
import RaceView from '../ProfileGenViews/RaceView';
import actions from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setRace: e => dispatch(actions.updateRace(e)),
});

const RaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RaceView);

export default RaceContainer;
