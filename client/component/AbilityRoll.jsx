import React from 'react';
import ScoreView from './ScoreView';
import RollButtonView from './RollButtonView';

class AbilityRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls: this.props.standard || [],
      scores: this.props.scores,
      modifiers: this.props.modifiers,
      selected: {
        STR: false,
        DEX: false,
        CON: false,
        INT: false,
        WIS: false,
        CHA: false,
      },
      rollCount: 0,
      currentValue: null,
      currentIndex: null,
    };
    this.addRoll = this.addRoll.bind(this);
    this.reroll = this.reroll.bind(this);
    this.restart = this.restart.bind(this);
  }

  setValue(e) {
    const { id } = e.target;
    const {
      scores,
      selected,
      rolls,
      modifiers,
      currentValue,
      currentIndex,
    } = this.state;

    if (!selected[id] && currentValue) {
      const scoreCopy = Object.assign(scores);
      const modifyCopy = Object.assign(modifiers);
      const rollCopy = rolls.slice();
      scoreCopy[id] += currentValue;
      modifyCopy[id] = Math.floor((scoreCopy[id] - 10) / 2);
      selected[id] = true;
      rollCopy[currentIndex] = 'DONE';
      this.setState({
        scores: scoreCopy,
        rolls: rollCopy,
        modifiers: modifyCopy,
        currentValue: null,
        currentIndex: null,
        selected,
      });
    }
  }

  addRoll() {
    const { rolls, rollCount } = this.state;
    const rollsCopy = rolls.slice();
    if (rollsCopy.length < 6) {
      rollsCopy.push(this.generateRoll());
      this.setState({
        rolls: rollsCopy,
        rollCount: rollCount + 1,
      });
    }
  }

  reroll() {
    const rolls = this.state.rolls.slice();
    if (rolls.length !== 0) {
      const score = this.generateRoll();
      rolls[rolls.length - 1] = score;
      this.setState({
        rolls,
      });
    }
  }

  restart() {
    this.setState({
      rolls: [],
      rollCount: 0,
      scores: this.props.scores,
      modifiers: this.props.modifiers,
      currentValue: null,
      currentIndex: null,
      selected: {
        STR: false,
        DEX: false,
        CON: false,
        INT: false,
        WIS: false,
        CHA: false,
      },
    }, () => this.props.genRestart());
  }

  selectRoll(e) {
    const score = e.target.id.split(',');
    const value = Number(score[0]);
    const position = Number(score[1]);

    if (typeof value === 'number') {
      this.setState({
        currentValue: value,
        currentIndex: position,
      });
    }
  }

  generateRoll() {
    const rolls = [];

    for (let roll = 0; roll < 4; roll += 1) {
      const num = Math.floor(Math.random() * 7);
      if (!rolls.length) {
        rolls.push(num);
      } else if (rolls[0] < num) {
        rolls.push(num);
      } else if (rolls[0] > num) {
        rolls.unshift(num);
      } else {
        rolls.push(num);
      }
    }

    return rolls.reduce((acc, num, index) => {
      if (index) {
        acc += num;
      }
      return acc;
    }, 0);
  }

  render() {
    const { rolls, scores, modifiers } = this.state;
    const { standard } = this.props;
    const list = standard ? JSON.parse(standard) : rolls;

    return (
      <div className="ability-roll-container">
        <div className="ability-scores">
          {
            Object.keys(scores).map(stat => (<ScoreView
              key={stat}
              scores={scores[stat]}
              modifiers={modifiers[stat]}
            />))
          }
        </div>
        <div className="">
          <div className="roll-container">
            {
              list.map((num, index) => (
                <div
                  className="ability-rolled"
                  id={[num, index]}
                  position={index}
                  onClick={(e) => this.selectRoll(e)}>
                  {num}
                </div>))
            }
          </div>
        </div>
        {
          standard ? null : <RollButtonView
            addRoll={this.addRoll}
            reroll={this.reroll}
            restart={this.restart}
          />
        }
        <div>
          {
            Object.keys(scores).map(stat => (
              <div
                className="ability"
                id={stat}
                onClick={(e) => this.setValue(e)}>
                {stat}
              </div>))
          }
        </div>
      </div>
    );
  }
}

export default AbilityRoll;
