import { connect } from 'react-redux';
import SelectRoll from '../components/SelectRoll';
import { pickRoll } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchtoProps = dispatch => ({
  roll: e => dispatch(pickRoll(e)),
});

const SelectRollContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SelectRoll);

export default SelectRollContainer;
