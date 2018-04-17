import { connect } from 'react-redux';
import StatusView from '../StatusView';

const mapStateToProps = ({ character }) => ({
  armor: character.status.armorClass,
  init: character.status.init,
  speed: character.status.speed,
  maxHP: character.status.maxHP,
  currentHP: character.status.currentHP,
  tempHP: character.status.tempHP,
  hitDie: character.charClass.hitDie,
});

const mapDispatchToProps = () => ({});

const StatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusView);

export default StatusContainer;
