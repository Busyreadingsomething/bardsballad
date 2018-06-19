import { connect } from 'react-redux';
import RollView from '../components/ScoreGenViews/RollView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setScore: (val, position) => dispatch(action.setScore(val, position)),
});

const RollContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RollView);

export default RollContainer;
