import { connect } from 'react-redux';
import RollListView from '../ScoreGenViews/RollListView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  rolls: state.getIn(['data', 'rolls']),
});

const mapDispatchToProps = () => ({});

const RollListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(RollListView));

export default RollListContainer;
