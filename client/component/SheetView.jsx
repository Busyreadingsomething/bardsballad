import React from 'react';
import AbilityView from './AbilityView';
import ProfileView from './ProfileView';
import WeaponsView from './WeaponsView';

class SheetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      experience: 0,
      profile: {
        name: 'Crumb Buckets',
        race: 'ELF',
        class: 'Ranger',
        alignment: 'Chaotic Good',
      },
      abilityScores: {
        STR: {
          value: 10,
          modifier: 0,
        },
        DEX: {
          value: 12,
          modifier: 1,
        },
        CON: {
          value: 12,
          modifier: 1,
        },
        WIS: {
          value: 10,
          modifier: 0,
        },
        INT: {
          value: 8,
          modifier: -1,
        },
        CHA: {
          value: 12,
          modifier: 1,
        },
      },
      status: {
        maxHP: 10,
        currenHP: 10,
        ac: 12,
      },
      weapons: [
        {
          id: 0,
          name: 'DAGGER',
          type: 'slashing',
          dieType: 8,
          dice: 1,
          description: 'Basic iron dagger',
        },
        {
          id: 1,
          name: 'LONG SWORD',
          type: 'slashing',
          dieType: 5,
          dice: 2,
          description: 'Family long sword',
        },
      ],
      armor: [],
      gear: {},
      spells: {
        prepared: [],
        list: [],
      },
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          WE GOT THIS GOD WILLING
        </div>
        <div className="bard-col-1">
          <ProfileView profile={this.state.profile} level={this.state.level} />
          <div>HEALTH AND DEFENSE VIEW</div>
          {
            this.state.weapons.map(weapon => (
              <WeaponsView
                key={weapon.id}
                info={weapon}
              />
            ))
          }
          <div>SPELLS VIEW</div>
        </div>
        <div className="bard-col-2">
          <div className="expeience-row">
            EXPERIENCE VIEW
          </div>
          <div className="ability-row">
            <AbilityView scores={this.state.abilityScores} />
          </div>
          <div>CHARACTER IMAGE VIEW</div>
          <div>GEAR VIEW</div>
        </div>
      </div>
    );
  }
}

export default SheetView;
