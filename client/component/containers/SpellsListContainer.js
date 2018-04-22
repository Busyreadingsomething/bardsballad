import { connect } from 'react-redux';
import toJS from './toJS/index';
import SpellsListView from '../SpellsListView';

const mapStateToProps = state => ({
  spells: state.getIn(['character', 'equipped', 'spells']),
});

const mapDispatchToProps = () => ({});

const SpellListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(SpellsListView));

export default SpellListContainer;
