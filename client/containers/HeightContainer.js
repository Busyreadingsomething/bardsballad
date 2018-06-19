import { connect } from 'react-redux';
import HeightView from '../components/ProfileGenViews/HeightView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setHeight: e => dispatch(action.updateProfile(e)),
});

const HeightContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeightView);

export default HeightContainer;
