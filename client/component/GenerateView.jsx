import React from 'react';
import RaceContainer from './containers/RaceContainer';
import ClassContainer from './containers/ClassContainer';
import AbilityRollContainer from './containers/AbilityRollContainer';
import SelectRoll from './SelectRoll';
import SelectRollContainer from './containers/SelectRollContainer';
import NameContainer from './containers/NameContainer';
import AlignContainer from './containers/AlignContainer';

class GenerateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.scoreGenSelect = this.scoreGenSelect.bind(this);
    this.genRestart = this.genRestart.bind(this);
  }

  // setRace(e) {
  //   const { value } = e.target;
  //   const { scores, modifiers, playerRace } = this.state;
  //   console.log('HITTING ME');
  //   if (!value) {
  //     return 'Error';
  //   }
  //   const scoresCopy = Object.assign({}, scores);
  //   const modCopy = Object.assign({}, modifiers);

  //   Object.keys(scoresCopy).forEach((stat) => {
  //     if (stat in raceModifiers[value]) {
  //       scoresCopy[stat] += raceModifiers[value][stat];
  //     }
  //     if (playerRace && stat in raceModifiers[playerRace]) {
  //       scoresCopy[stat] -= raceModifiers[playerRace][stat];
  //     }
  //     modCopy[stat] = Math.floor((scoresCopy[stat] - 10) / 2);
  //   });

  //   this.setState({
  //     scores: scoresCopy,
  //     modifiers: modCopy,
  //     playerRace: value,
  //     point: null,
  //   }, () => console.log(this.state.scores));
  // }

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
    const { point } = this.state;
    return (
      <div className="gen-container">
        <NameContainer />
        <div className="gen-dropdowns">
          <RaceContainer />
          <ClassContainer />
          <AlignContainer />
        </div>
        <SelectRollContainer />
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
