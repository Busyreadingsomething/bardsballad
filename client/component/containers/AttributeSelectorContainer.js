import { connect } from 'react-redux';
import AttributeSelectorView from '../AttributeSelectorView';
import toJS from './toJS/index';

const mapStateToProps = state => ({
  proficiencies: state.getIn(['charClass', 'proficiencies']),
  styles: state.getIn(['charClass', 'styles']),
});

const mapDispatchToProps = () => ({});

const AttributeSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(AttributeSelectorView));

export default AttributeSelectorContainer;
