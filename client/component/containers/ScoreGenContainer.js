import { connect } from 'react-redux';
import ScoreGenView from '../ScoreGenView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  rollSelect: state.getIn(['data', 'rollSelect']),
});

const mapDispatchToProps = () => ({});

const ScoreGenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ScoreGenView));

export default ScoreGenContainer;
