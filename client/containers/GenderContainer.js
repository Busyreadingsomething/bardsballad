import { connect } from 'react-redux';
import GenderView from '../components/ProfileGenViews/GenderView';
import { updateProfile } from '../actions';

const mapStateToProps = state => ({
  value: state.getIn(['profile', 'gender']),
});

const mapDispatchToProps = dispatch => ({
  setGender: e => dispatch(updateProfile(e)),
});

const GenderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderView);

export default GenderContainer;
