import { connect } from 'react-redux';
import RollView from '../components/ScoreGenViews/RollView';
import { setScore } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setScore: (val, position) => dispatch(setScore(val, position)),
});

const RollContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RollView);

export default RollContainer;
