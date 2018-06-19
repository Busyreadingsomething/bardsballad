import { connect } from 'react-redux';
import HairView from '../components/ProfileGenViews/HairView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setHair: e => dispatch(action.updateProfile(e)),
});

const HairContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HairView);

export default HairContainer;
