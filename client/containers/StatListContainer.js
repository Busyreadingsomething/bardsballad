import { connect } from 'react-redux';
import StatListView from '../components/ScoreGenViews/StatListView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  stats: state.getIn(['stats']),
  holder: state.getIn(['holder']),
});

const mapDispatchToProps = () => ({});

const StatListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(StatListView));

export default StatListContainer;
