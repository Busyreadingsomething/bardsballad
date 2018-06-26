import { connect } from 'react-redux';
import StatButtonView from '../components/ScoreGenViews/StatButtonView';
import { updateHolder } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  selectStat: stat => dispatch(updateHolder(stat)),
});

const StatButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatButtonView);

export default StatButtonContainer;
