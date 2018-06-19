import { connect } from 'react-redux';
import AlignView from '../components/AlignView';
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
