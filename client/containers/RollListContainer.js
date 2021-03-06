import { connect } from 'react-redux';
import RollListView from '../components/ScoreGenViews/RollListView';
import toJS from './toJS/index';
import { setAbility, reroll } from '../actions';

const mapStateToProps = state => ({
  rolls: state.getIn(['rolls']),
  rollKeys: state.getIn(['rollKeys']),
});

const mapDispatchToProps = dispatch => ({
  setAbility: () => dispatch(setAbility()),
  reroll: () => dispatch(reroll()),
});

const RollListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(RollListView));

export default RollListContainer;
