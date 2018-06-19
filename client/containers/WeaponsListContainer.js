import { connect } from 'react-redux';
import toJS from './toJS/index';
import WeaponsListView from '../components/WeaponsListView';

const mapStateToProps = state => ({
  weapons: state.getIn(['equipped', 'weapons']),
});

const mapDispatchToProps = () => ({});

const WeaponsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(WeaponsListView));

export default WeaponsListContainer;
