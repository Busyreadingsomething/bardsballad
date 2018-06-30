import { connect } from 'react-redux';
import PGV from '../components/ProfileGenView';
import { nextPage } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(nextPage()),
});

const ProfileGenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PGV);

export default ProfileGenContainer;
