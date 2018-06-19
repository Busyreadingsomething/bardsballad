import { connect } from 'react-redux';
import ModListView from '../components/ScoreGenViews/ModListView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  mods: state.getIn(['race', 'modifiers']),
  stats: state.getIn(['stats']),
});

const mapDispatchToProps = () => ({});

const ModListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ModListView));

export default ModListContainer;
