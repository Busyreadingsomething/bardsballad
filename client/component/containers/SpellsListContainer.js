import { connect } from 'react-redux';
import SpellsListView from '../SpellsListView';

const mapStateToProps = ({ character }) => ({
  spells: character.equipped.spells,
});

const mapDispatchToProps = () => ({});

const SpellListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpellsListView);

export default SpellListContainer;
