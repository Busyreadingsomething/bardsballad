import React from 'react';
import RaceView from './RaceView';
import ClassView from './ClassView';
import AbilityRoll from './AbilityRoll';
import SelectRoll from './SelectRoll';
import NameView from './NameView';
import AlignView from './AlignView';

class GenerateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: null,
      playerRace: null,
      playerClass: null,
      playerAlign: null,
      raceMod: {
        DRAGONBORNE: {
          STR: 2,
          CHA: 1,
        },
        DWARF: {
          CON: 2,
        },
        ELF: {
          DEX: 2,
        },
        GNOME: {
          INT: 2,
        },
        'HALF-ELF': {
          CHA: 2,
        },
        'HALF-ORC': {
          STR: 2,
          CON: 1,
        },
        HALFLING: {
          DEX: 2,
        },
        HUMAN: {
          STR: 1,
          DEX: 1,
          CON: 1,
          INT: 1,
          WIS: 1,
          CHA: 1,
        },
        TIEFLING: {
          INT: 1,
          CHA: 2,
        },
      },
      hitDie: {
        BARBARIAN: 12,
        BARD: 8,
        CLERIC: 8,
        DRUID: 8,
        FIGHTER: 10,
        MONK: 8,
        PALADIN: 10,
        RANGER: 10,
        ROGUE: 8,
        SORCERROR: 6,
        WARLOCK: 8,
        WIZARD: 6,
      },
      point: null,
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
      die: null,
    };
    this.setRaceMods = this.setRaceMods.bind(this);
    this.scoreGenSelect = this.scoreGenSelect.bind(this);
    this.setClassDie = this.setClassDie.bind(this);
    this.genRestart = this.genRestart.bind(this);
    this.setName = this.setName.bind(this);
    this.setAlign = this.setAlign.bind(this);
  }

  setRaceMods(e) {
    const { value } = e.target;
    const { raceMod, scores, modifiers } = this.state;
    console.log(value);
    if (value) {
      const scoreCopy = Object.assign(scores);
      const modifierCopy = Object.assign(modifiers);

      Object.keys(raceMod[value]).forEach((stat) => {
        if (stat in scoreCopy) {
          scoreCopy[stat] += raceMod[value][stat];
          modifierCopy[stat] = Math.floor((scoreCopy[stat] - 10) / 2);
        }
      });

      this.setState({
        scores: scoreCopy,
        modifiers: modifierCopy,
        playerRace: value,
      });
    }
  }

  setClassDie(e) {
    const { value } = e.target;
    console.log(this.state.hitDie[value]);
    if (value) {
      this.setState({
        playerClass: value,
        die: this.state.hitDie[value],
      });
    }
  }

  setName(e) {
    const { key, target } = e;
    if (key === 'Enter') {
      this.setState({
        playerName: target.value,
      });
    }
  }

  setAlign(e) {
    const { value } = e.target;
    if (value) {
      this.setState({
        playerAlign: value,
      });
    }
  }

  scoreGenSelect(e) {
    this.setState({
      point: e.target.value,
    });
  }

  genCharacter() {
    console.log('HIT');
    const {
      playerName,
      playerClass,
      playerRace,
      playerAlign,
      die,
      scores,
      modifiers,
    } = this.state;

    const options = {
      profile: {
        name: playerName,
        race: playerRace,
        class: playerClass,
        alignment: playerAlign,
      },
      scores,
      modifiers,
      hitDie: die,
    };

    this.props.generate(options);
  }

  genRestart() {
    this.setState({
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
      playerClass: null,
      playerAlign: null,
      playerName: null,
      playerRace: null,
      die: null,
      point: null,
    });
  }

  render() {
    const { scores, modifiers, playerName, playerClass, playerRace, point, playerAlign } = this.state;
    console.log(this.state);
    return (
      <div className="gen-container">
        <NameView setName={this.setName} />
        <div className="gen-dropdowns">
          {
            playerName ? <RaceView setRaceMods={this.setRaceMods} /> : null
          }
          {
            playerRace ? <ClassView setClassDie={this.setClassDie} /> : null
          }
          {
            playerClass ? <AlignView setAlign={this.setAlign} /> : null
          }
        </div>
        {
          playerAlign ? <SelectRoll roll={this.scoreGenSelect} /> : null
        }
        {
          point === 'roll' ? <AbilityRoll
            scores={scores}
            modifiers={modifiers}
            genRestart={this.genRestart}
          /> : null
        }
        {
          point === 'standard' ? <AbilityRoll
            scores={scores}
            modifiers={modifiers}
            genRestart={this.genRestart}
            standard="[15, 14, 13, 12, 10, 18]"
          /> : null
        }
        <div className="gen-submit" onClick={() => this.genCharacter()}>SUBMIT</div>
        Point Generator
          - radio buttons for the different options
            2. Standard Array [15,14,13,12,10,8]
            3. Point Buy system
              - 27 points total
              - 9 - 13 = -1
              - 14 - 15 = -2
      </div>
    );
  }
}

export default GenerateView;
