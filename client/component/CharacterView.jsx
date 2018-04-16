import React from 'react';
import ProfileContainer from './containers/ProfileContainer';
import WeaponsView from './WeaponsView';
import SpellView from './SpellView';
import ScoreView from './ScoreView';
import StatusContainer from './containers/StatusContainer';

const CharacterView = ({ weapons, spells, ability }) => (
  <div className="character-container">
    <div className="bard-col-1">
      <ProfileContainer />
      <StatusContainer />
      <div className="weapons-container">
        WEAPONS:
        {
          weapons.map(weapon => (
            <WeaponsView
              key={weapon.id}
              info={weapon}
            />
          ))
        }
      </div>
      <div className="spells-container">
        SPELLS:
        <div className="spells-prepared">
          {
            spells.map(spell => <SpellView key={spell.id} info={spell} />)
          }
        </div>
      </div>
    </div>
    <div className="bard-col-2">
      <div className="experience-row">
        EXPERIENCE VIEW
      </div>
      <div className="ability-row">
        {
          Object.keys(ability).map(stat => (<ScoreView
            key={stat}
            stat={stat}
            ability={ability[stat]}
          />))
        }
      </div>
      <div className="character-image-container">CHARACTER IMAGE VIEW</div>
      <div className="gear-container">GEAR VIEW</div>
    </div>
  </div>
);

export default CharacterView;
