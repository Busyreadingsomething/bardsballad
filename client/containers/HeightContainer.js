import { connect } from 'react-redux';
import HeightView from '../components/ProfileGenViews/HeightView';
import { updateProfile } from '../actions';

const mapStateToProps = state => ({
  value: state.getIn(['profile', 'height']),
});

const mapDispatchToProps = dispatch => ({
  setHeight: e => dispatch(updateProfile(e)),
});

const HeightContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeightView);

export default HeightContainer;
