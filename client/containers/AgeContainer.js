import { connect } from 'react-redux';
import AgeView from '../components/ProfileGenViews/AgeView';
import { updateProfile } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setAge: e => dispatch(updateProfile(e)),
});

const AgeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgeView);

export default AgeContainer;
