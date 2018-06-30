import { connect } from 'react-redux';
import PGV from '../components/ProfileGenView';
import { modPage } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  selectPage: e => dispatch(modPage(e)),
});

const ProfileGenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PGV);

export default ProfileGenContainer;
