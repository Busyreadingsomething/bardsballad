import { connect } from 'react-redux';
import { makeCharacter } from '../actions';
import toJS from './toJS/index';
import AttributeSelectorView from '../components/AttributeSelectorView';

const mapStateToProps = state => ({
  proficiencies: state.getIn(['charClass', 'proficiencies']),
  styles: state.getIn(['charClass', 'styles']),
});

const mapDispatchToProps = dispatch => ({
  genCharacter: () => dispatch(makeCharacter()),
});

const AttributeSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(AttributeSelectorView));

export default AttributeSelectorContainer;
