import { connect } from 'react-redux';
import toJS from './toJS/index';
import ProfileView from '../ProfileView';

const mapStateToProps = state => ({
  profile: state.getIn(['character', 'profile']),
  race: state.getIn(['character', 'race', 'name']),
  charClass: state.getIn(['character', 'charClass', 'name']),
  level: state.getIn(['character', 'status', 'level']),
});

const mapDispatchToProps = dispatch => ({});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(ProfileView));

export default ProfileContainer;
