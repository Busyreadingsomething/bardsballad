import { connect } from 'react-redux';
import AlignView from '../components/AlignView';
import { updateProfile } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setAlign: e => dispatch(updateProfile(e)),
});

const AlignContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlignView);

export default AlignContainer;
