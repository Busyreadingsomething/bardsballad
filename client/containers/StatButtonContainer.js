import { connect } from 'react-redux';
import StatButtonView from '../components/ScoreGenViews/StatButtonView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  selectStat: stat => dispatch(action.updateHolder(stat)),
});

const StatButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatButtonView);

export default StatButtonContainer;
