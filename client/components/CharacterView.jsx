import React from 'react';
import ProfileContainer from '../containers/ProfileContainer';
import WeaponsListContainer from '../containers/WeaponsListContainer';
import SpellsListContainer from '../containers/SpellsListContainer';
import AbilityListContainer from '../containers/AbilityListContainer';
import StatusContainer from '../containers/StatusContainer';
import ExpProgressContainer from '../containers/ExpProgressContainer';

const CharacterView = () => (
  <div className="character-container">
    <div className="bard-col-1">
      <ProfileContainer />
      <StatusContainer />
      <WeaponsListContainer />
      <SpellsListContainer />
    </div>
    <div className="bard-col-2">
      <ExpProgressContainer />
      <AbilityListContainer />
      <div className="character-image-container">CHARACTER IMAGE VIEW</div>
      <div className="gear-container">GEAR VIEW</div>
    </div>
  </div>
);

export default CharacterView;
