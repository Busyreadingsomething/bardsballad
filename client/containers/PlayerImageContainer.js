import { connect } from 'react-redux';
import PlayerImageView from '../components/PlayerImageView';

const mapStateToProps = state => ({
  images: state.getIn(),
  maxHP: state.getIn(),
  currHP: state.getIn(),
});

const mapDispatchToProps = () => ({});

const PlayerImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerImageView);

export default PlayerImageContainer;
