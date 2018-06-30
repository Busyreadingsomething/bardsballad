import { connect } from 'react-redux';
import { modPage } from '../actions';
import ScoreGenView from '../components/ScoreGenView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  rollSelect: state.getIn(['rollSelect']),
  race: state.getIn(['race', 'name']),
});

const mapDispatchToProps = dispatch => ({
  selectPage: e => dispatch(modPage(e)),
});

const ScoreGenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ScoreGenView));

export default ScoreGenContainer;
