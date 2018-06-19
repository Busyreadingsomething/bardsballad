import { connect } from 'react-redux';
import EyeView from '../components/ProfileGenViews/EyeView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setEyes: e => dispatch(action.updateProfile(e)),
});

const EyeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EyeView);

export default EyeContainer;
