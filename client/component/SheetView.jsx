import React from 'react';
import GenerateView from './GenerateView';
import CharacterView from './CharacterView';

class SheetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeCharacter: false,
      level: 0,
      experience: 0,
      profile: {
        name: null,
        race: null,
        class: null,
        alignment: null,
      },
      scores: {
        STR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: 0,
      },
      modifiers: {
        STR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: 0,
      },
      hitDie: null,
      status: {
        maxHP: null,
        currenHP: null,
        ac: null,
      },
      weapons: [
        {
          id: 'W0',
          name: 'DAGGER',
          type: 'slashing',
          dieType: 8,
          dice: 1,
          description: 'Basic iron dagger',
        },
        {
          id: 'W1',
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
        prepared: [
          {
            id: 'SP0',
            name: 'Burning Hands',
            level: 1,
            time: '1 Action',
            duration: 'Inst.',
            range: ['Self', '15ft'],
            save: 'DEX',
            effect: 'CHARMED',
            dieType: 6,
            dice: 3,
            description: 'Burns people with your hands',
          },
          {
            id: 'SP1',
            name: 'Charm Person',
            level: 1,
            time: '1 Action',
            duration: '1 Hour',
            range: ['15ft'],
            save: 'WIS',
            effect: 'FIRE',
            description: 'Becoming a charming person',
          },
        ],
        list: [],
      },
    };
    this.generateCharacter = this.generateCharacter.bind(this);
  }

  generateCharacter(character) {
    const {
      profile,
      scores,
      modifiers,
      hitDie,
    } = character;

    this.setState({
      level: 1,
      madeCharacter: true,
      profile,
      scores,
      modifiers,
      hitDie,
    }, () => console.log(this.state));
  }

  render() {
    const {
      profile,
      level,
      weapons,
      spells,
      scores,
      modifiers,
      madeCharacter,
    } = this.state;

    return (
      <div className="main-container">
        {
          madeCharacter ?
            <CharacterView /> : <GenerateView generate={this.generateCharacter} />
        }
      </div>
    );
  }
}

export default SheetView;
