import { connect } from 'react-redux';
import toJS from './toJS/index';
import ProfileView from '../ProfileView';

const mapStateToProps = state => ({
  profile: state.get('profile'),
  race: state.getIn(['race', 'name']),
  charClass: state.getIn(['charClass', 'name']),
  level: state.getIn(['status', 'level']),
});

const mapDispatchToProps = () => ({});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ProfileView));

export default ProfileContainer;
