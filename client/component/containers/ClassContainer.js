import { connect } from 'react-redux';
import ClassView from '../ClassView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setClass: e => dispatch(action.updateClass(e)),
});

const ClassContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassView);

export default ClassContainer;
