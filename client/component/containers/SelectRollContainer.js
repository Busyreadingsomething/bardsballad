import { connect } from 'react-redux';
import SelectRoll from '../SelectRoll';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchtoProps = dispatch => ({
  roll: e => dispatch(action.pickRoll(e)),
});

const SelectRollContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SelectRoll);

export default SelectRollContainer;
