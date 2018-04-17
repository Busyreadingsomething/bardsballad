import { connect } from 'react-redux';
import ProfileView from '../ProfileView';

const mapStateToProps = ({ character }) => ({
  profile: character.profile,
  race: character.race.name,
  charClass: character.charClass.name,
  level: character.status.level,
});

const mapDispatchToProps = dispatch => ({});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);

export default ProfileContainer;
