import { connect } from 'react-redux';
import toJS from './toJS';
import { makeCharacter } from '../actions';
import SheetView from '../components/SheetView';

const mapStateToProps = state => ({
  madeCharacter: state.get('madeCharacter'),
});

const mapDispatchToProps = dispatch => ({
  genCharacter: () => dispatch(makeCharacter()),
});

const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(SheetView));

export default SheetContainer;
