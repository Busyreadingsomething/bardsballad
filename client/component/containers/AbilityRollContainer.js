import { connect } from 'react-redux';
import toJS from './toJS/index';
import AbilityRoll from '../AbilityRoll';

const mapStateToProps = (state, ownProps) => ({
  ability: state.getIn(['ability']),
  list: ownProps.standard,
});

const mapDispatchToProps = () => ({});

const AbilityRollContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(AbilityRoll));

export default AbilityRollContainer;
