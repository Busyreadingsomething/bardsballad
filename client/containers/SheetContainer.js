import { connect } from 'react-redux';
import toJS from './toJS';
import SheetView from '../components/SheetView';

const mapStateToProps = state => ({
  madeCharacter: state.get('madeCharacter'),
});

const mapDispatchToProps = () => ({});

const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(SheetView));

export default SheetContainer;
