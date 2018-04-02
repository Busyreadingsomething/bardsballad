import React from 'react';
import ProfileView from './ProfileView';
import WeaponsView from './WeaponsView';
import SpellView from './SpellView';
import ScoreView from './ScoreView';

const CharacterView = ({ weapons, spells, scores, profile, level, modifiers}) => (
  <div className="character-container">
    <div className="bard-col-1">
      <ProfileView profile={profile} level={level} />
      <div>HEALTH AND DEFENSE VIEW</div>
      {
        weapons.map(weapon => (
          <WeaponsView
            key={weapon.id}
            info={weapon}
          />
        ))
      }
      <div className="spells-container">
        <div className="spells-prepared">
          {
            spells.prepared.map(spell => <SpellView key={spell.id} info={spell} />)
          }
        </div>
      </div>
    </div>
    <div className="bard-col-2">
      <div className="expeience-row">
        EXPERIENCE VIEW
      </div>
      <div className="ability-row">
        {
          Object.keys(scores).map(stat => (<ScoreView
            key={stat}
            scores={scores[stat]}
            modifiers={modifiers[stat]}
          />))
        }
      </div>
      <div>CHARACTER IMAGE VIEW</div>
      <div>GEAR VIEW</div>
    </div>
  </div>
);

export default CharacterView;
