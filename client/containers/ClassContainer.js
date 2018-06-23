import { connect } from 'react-redux';
import ClassView from '../components/ClassView';
import { updateClass } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setClass: e => dispatch(updateClass(e)),
});

const ClassContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassView);

export default ClassContainer;
