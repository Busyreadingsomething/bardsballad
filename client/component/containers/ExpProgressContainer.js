import { connect } from 'react-redux';
import toJS from './toJS/index';
import ExpProgressView from '../ExpProgressView';

const mapStateToProps = state => ({
  experience: state.getIn(['character', 'status', 'experience']),
  nextLevel: state.getIn(['character', 'status', 'nextLevel']),
});

const mapDispatchToProps = () => ({});

const ExpProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ExpProgressView));

export default ExpProgressContainer;
