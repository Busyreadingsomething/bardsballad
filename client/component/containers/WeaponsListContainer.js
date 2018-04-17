import { connect } from 'react-redux';
import WeaponsListView from '../WeaponsListView';

const mapStateToProps = ({ character }) => ({
  weapons: character.equipped.weapons,
});

const mapDispatchToProps = () => ({});

const WeaponsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeaponsListView);

export default WeaponsListContainer;
