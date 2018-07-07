import { connect } from 'react-redux';
import NameView from '../components/ProfileGenViews/NameView';
import { updateProfile } from '../actions';

const mapStateToProps = state => ({
  value: state.getIn(['profile', 'name']),
});

const mapDispatchToProps = dispatch => ({
  setName: e => dispatch(updateProfile(e)),
});

const NameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameView);

export default NameContainer;
