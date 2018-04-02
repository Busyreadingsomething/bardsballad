import React from 'react';
import ProfileView from './ProfileView';
import WeaponsView from './WeaponsView';
import SpellView from './SpellView';
import ScoreView from './ScoreView';
import StatusView from './StatusView';

const CharacterView = ({
  weapons,
  spells,
  scores,
  profile,
  level,
  modifiers,
}) => (
  <div className="character-container">
    <div className="bard-col-1">
      <ProfileView profile={profile} level={level} />
      <StatusView
        armor={13}
        init={modifiers.DEX}
        speed={30}
        maxHp={10}
        hp={10}
        tempHp={0}
        hitdie={10}
      />
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
            spells.prepared.map(spell => <SpellView key={spell.id} info={spell} />)
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
          Object.keys(scores).map(stat => (<ScoreView
            key={stat}
            stat={stat}
            scores={scores[stat]}
            modifiers={modifiers[stat]}
          />))
        }
      </div>
      <div className="character-image-container">CHARACTER IMAGE VIEW</div>
      <div className="gear-container">GEAR VIEW</div>
    </div>
  </div>
);

export default CharacterView;
