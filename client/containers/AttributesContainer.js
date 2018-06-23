import { connect } from 'react-redux';
import AV from '../components/AttributeSelectorViews/AttributesView';
import { updateAttr } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setAttr: (index, attr, prof) => dispatch(updateAttr(index, attr, prof)),
});

const AttributesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AV);

export default AttributesContainer;
