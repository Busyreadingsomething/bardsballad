import { connect } from 'react-redux';
import toJS from './toJS';
import HEAL from '../components/HalfElfViews/HalfElfAbilityList';

const mapStateToProps = state => ({
  abilities: state.get('stats'),
});

const mapDispatchToProps = dispatch => ({});

const HalfElfAbilityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(HEAL));

export default HalfElfAbilityContainer;
