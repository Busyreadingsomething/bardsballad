import { connect } from 'react-redux';
import AbilityListView from '../AbilityListView';

const mapStateToProps = ({ character }) => ({
  ability: character.ability,
});

const mapDispatchtoProps = () => ({});

const AbilityListContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(AbilityListView);

export default AbilityListContainer;
