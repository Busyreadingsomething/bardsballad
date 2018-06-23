import { connect } from 'react-redux';
import HairView from '../components/ProfileGenViews/HairView';
import { updateProfile } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setHair: e => dispatch(updateProfile(e)),
});

const HairContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HairView);

export default HairContainer;
