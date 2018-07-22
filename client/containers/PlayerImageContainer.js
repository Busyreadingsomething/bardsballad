import { connect } from 'react-redux';
import PlayerImageView from '../components/PlayerImageView';
import toJS from './toJS';

const mapStateToProps = state => ({
  images: state.getIn(['status', 'images']),
  maxHP: state.getIn(['status', 'maxHP']),
  currHP: state.getIn(['status', 'currentHP']),
});

const mapDispatchToProps = () => ({});

const PlayerImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(PlayerImageView));

export default PlayerImageContainer;
