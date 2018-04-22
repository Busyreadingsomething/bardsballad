import { connect } from 'react-redux';
import toJS from './toJS/index';
import StatusView from '../StatusView';

const mapStateToProps = state => ({
  armor: state.getIn(['character', 'status', 'armorClass']),
  init: state.getIn(['character', 'status', 'init']),
  speed: state.getIn(['character', 'status', 'speed']),
  maxHP: state.getIn(['character', 'status', 'maxHP']),
  currentHP: state.getIn(['character', 'status', 'currentHP']),
  tempHP: state.getIn(['character', 'status', 'tempHP']),
  hitDie: state.getIn(['character', 'status', 'hitDie']),
});

const mapDispatchToProps = () => ({});

const StatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(StatusView));

export default StatusContainer;
