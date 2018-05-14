import { connect } from 'react-redux';
import ModListView from '../ScoreGenViews/ModListView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  mods: state.getIn(['character', 'race', 'modifiers']),
  stats: state.getIn(['data', 'stats']),
});

const mapDispatchToProps = () => ({});

const ModListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ModListView));

export default ModListContainer;
