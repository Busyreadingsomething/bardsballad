import { connect } from 'react-redux';
import GenderView from '../ProfileGenViews/GenderView';
import actions from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setGender: e => dispatch(actions.updateProfile(e)),
});

const GenderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderView);

export default GenderContainer;
