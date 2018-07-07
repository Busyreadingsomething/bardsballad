import { connect } from 'react-redux';
import { rolling } from '../actions';
import toJS from './toJS/index';
import WeaponsListView from '../components/WeaponsListView';

const mapStateToProps = state => ({
  weapons: state.getIn(['equipped', 'weapons']),
});

const mapDispatchToProps = dispatch => ({
  roll: index => dispatch(rolling(index)),
});

const WeaponsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(WeaponsListView));

export default WeaponsListContainer;
