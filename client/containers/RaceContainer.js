import { connect } from 'react-redux';
import RaceView from '../components/ProfileGenViews/RaceView';
import { updateRace } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setRace: e => dispatch(updateRace(e)),
});

const RaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RaceView);

export default RaceContainer;
