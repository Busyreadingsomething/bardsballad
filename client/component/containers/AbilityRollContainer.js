import { connect } from 'react-redux';
import AbilityRoll from '../AbilityRoll';

const mapStateToProps = (state, ownProps) => ({
  ability: state.ability,
  list: ownProps.standard,
});

const mapDispatchToProps = dispatch => ({});

const AbilityRollContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AbilityRoll);

export default AbilityRollContainer;
