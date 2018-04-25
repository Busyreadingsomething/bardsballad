import React from 'react';
import RaceView from './RaceView';
import ClassView from './ClassView';
import AbilityRoll from './AbilityRoll';
import AbilityRollContainer from './containers/AbilityRollContainer';
import SelectRoll from './SelectRoll';
import NameView from './NameView';
import NameContainer from './containers/NameContainer';
import AlignView from './AlignView';
import raceModifiers from '../../practiceData/raceModifiers';

class GenerateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: null,
      playerRace: null,
      playerClass: null,
      playerAlign: null,
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
    const { scores, modifiers, playerRace } = this.state;
    console.log('HITTING ME');
    if (!value) {
      return 'Error';
    }
    const scoresCopy = Object.assign({}, scores);
    const modCopy = Object.assign({}, modifiers);

    console.log('FIRST:', scoresCopy);
    Object.keys(scoresCopy).forEach((stat) => {
      if (stat in raceModifiers[value]) {
        scoresCopy[stat] += raceModifiers[value][stat];
      }
      if (playerRace && stat in raceModifiers[playerRace]) {
        scoresCopy[stat] -= raceModifiers[playerRace][stat];
      }
      modCopy[stat] = Math.floor((scoresCopy[stat] - 10) / 2);
    });

    console.log('SECOND:', scoresCopy);

    this.setState({
      scores: scoresCopy,
      modifiers: modCopy,
      playerRace: value,
      point: null,
    }, () => console.log(this.state.scores));
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
    const { scores, modifiers, point } = this.state;
    return (
      <div className="gen-container">
        <NameContainer />
        <div className="gen-dropdowns">
          <RaceView setRaceMods={this.setRaceMods} />
          <ClassView setClassDie={this.setClassDie} />
          <AlignView setAlign={this.setAlign} />
        </div>
        <SelectRoll roll={this.scoreGenSelect} />
        {
          point === 'roll' ? <AbilityRollContainer
            genRestart={this.genRestart}
            standard={[]}
          /> : null
        }
        {
          point === 'standard' ? <AbilityRollContainer
            genRestart={this.genRestart}
            standard={[15, 14, 13, 12, 10, 18]}
          /> : null
        }
        <button className="gen-submit" onClick={() => this.genCharacter()}>SUBMIT</button>
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
