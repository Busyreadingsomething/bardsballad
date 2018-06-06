import { connect } from 'react-redux';
import toJS from './toJS/index';
import AbilityListView from '../AbilityListView';

const mapStateToProps = state => ({
  ability: state.getIn(['ability']),
});

const mapDispatchtoProps = () => ({});

const AbilityListContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(toJS(AbilityListView));

export default AbilityListContainer;
