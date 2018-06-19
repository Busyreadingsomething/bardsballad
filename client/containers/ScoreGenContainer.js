import { connect } from 'react-redux';
import ScoreGenView from '../components/ScoreGenView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  rollSelect: state.getIn(['rollSelect']),
});

const mapDispatchToProps = () => ({});

const ScoreGenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ScoreGenView));

export default ScoreGenContainer;
