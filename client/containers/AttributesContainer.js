import { connect } from 'react-redux';
import AV from '../components/AttributeSelectorViews/AttributesView';
import action from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setAttr: (index, attr, prof) => dispatch(action.updateAttr(index, attr, prof)),
});

const AttributesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AV);

export default AttributesContainer;
