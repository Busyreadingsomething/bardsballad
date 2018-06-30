import { connect } from 'react-redux';
import { modPage } from '../actions';
import RoleSelectView from '../components/RoleSelectView';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  selectPage: e => dispatch(modPage(e)),
});

const RoleSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleSelectView);

export default RoleSelectContainer;
