import { connect } from 'react-redux';
import toJS from './toJS/index';
import StatusView from '../StatusView';

const mapStateToProps = state => ({
  armor: state.getIn(['status', 'armorClass']),
  init: state.getIn(['status', 'init']),
  speed: state.getIn(['status', 'speed']),
  maxHP: state.getIn(['status', 'maxHP']),
  currentHP: state.getIn(['status', 'currentHP']),
  tempHP: state.getIn(['status', 'tempHP']),
  hitDie: state.getIn(['status', 'hitDie']),
});

const mapDispatchToProps = () => ({});

const StatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(StatusView));

export default StatusContainer;
