import { connect } from 'react-redux';
import NameView from '../NameView';
import actions from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setName: e => dispatch(actions.updateName(e)),
});

const NameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameView);

export default NameContainer;
