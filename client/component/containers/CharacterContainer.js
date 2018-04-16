import { connect } from 'react-redux';
import CharacterView from '../CharacterView';

const mapStateToProps = ({ character }) => ({
  weapons: character.equipped.weapons,
  spells: character.equipped.spells,
  ability: character.ability,
});

const mapDispatchToProps = () => ({});

const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterView);

export default CharacterContainer;
