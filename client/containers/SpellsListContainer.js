import { connect } from 'react-redux';
import toJS from './toJS/index';
import SpellsListView from '../components/SpellsListView';

const mapStateToProps = state => ({
  spells: state.getIn(['equipped', 'spells']),
});

const mapDispatchToProps = () => ({});

const SpellListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(SpellsListView));

export default SpellListContainer;
