import { connect } from 'react-redux';
import ClassView from '../components/ClassView';
import { updateClass } from '../actions';

const mapStateToProps = state => ({
  value: state.getIn(['charClass', 'name']),
});

const mapDispatchToProps = dispatch => ({
  setClass: e => dispatch(updateClass(e)),
});

const ClassContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassView);

export default ClassContainer;
