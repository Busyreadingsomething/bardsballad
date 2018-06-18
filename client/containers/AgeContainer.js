import { connect } from 'react-redux';
import AgeView from '../components/ProfileGenViews/AgeView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setAge: e => dispatch(action.updateProfile(e)),
});

const AgeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgeView);

export default AgeContainer;
