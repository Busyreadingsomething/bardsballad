import { connect } from 'react-redux';
import toJS from './toJS';
import action from '../actions';
import SheetView from '../SheetView';

const mapStateToProps = state => ({
  madeCharacter: state.get('madeCharacter'),
});

const mapDispatchToProps = dispatch => ({
  genCharacter: () => dispatch(action.makeCharacter()),
});

const SheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(SheetView));

export default SheetContainer;
