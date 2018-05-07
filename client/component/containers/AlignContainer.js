import { connect } from 'react-redux';
import AlignView from '../AlignView';
import actions from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setAlign: e => dispatch(actions.updateProfile(e)),
});

const AlignContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlignView);

export default AlignContainer;
