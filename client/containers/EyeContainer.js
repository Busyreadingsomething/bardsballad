import { connect } from 'react-redux';
import EyeView from '../components/ProfileGenViews/EyeView';
import { updateProfile } from '../actions';

const mapStateToProps = state => ({
  value: state.getIn(['profile', 'eye']),
});

const mapDispatchToProps = dispatch => ({
  setEyes: e => dispatch(updateProfile(e)),
});

const EyeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EyeView);

export default EyeContainer;
