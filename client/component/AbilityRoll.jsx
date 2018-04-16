import React from 'react';
import ScoreView from './ScoreView';
import RollButtonView from './RollButtonView';

const generateRoll = () => {
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
    let added = acc;
    if (index) {
      added += num;
    }
    return added;
  }, 0);
};


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
      currentValue: null,
      currentIndex: null,
    };
    this.addRoll = this.addRoll.bind(this);
    this.reroll = this.reroll.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    const { standard } = this.props;
    if (standard) {
      this.setState({
        rolls: standard,
      });
    }
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
    const { rolls } = this.state;
    const rollsCopy = rolls.slice();
    if (rollsCopy.length < 6) {
      rollsCopy.push(this.generateRoll());
      this.setState({
        rolls: rollsCopy,
      });
    }
  }

  reroll() {
    const rolls = this.state.rolls.slice();
    if (rolls.length !== 0) {
      const score = generateRoll();
      rolls[rolls.length - 1] = score;
      this.setState({
        rolls,
      });
    }
  }

  restart() {
    this.setState({
      rolls: [],
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
    console.log(score);
    const value = Number(score[0]);
    const position = Number(score[1]);

    if (typeof value === 'number') {
      this.setState({
        currentValue: value,
        currentIndex: position,
      });
    }
  }

  render() {
    const { rolls, scores, modifiers } = this.state;
    const { standard } = this.props;
    const list = standard.length ? standard : rolls;

    return (
      <div className="ability-roll-container">
        <div className="ability-scores">
          {
            Object.keys(props.ability).map(stat => (
              <ScoreView
                key={stat}
                ability={props.ability[stat]}
              />))
          }
        </div>
        <div className="ability-stats-container">
          {
            Object.keys(props.ability).map(stat => (
              <button
                className="ability"
                id={stat}
                onClick={e => this.setValue(e)}
              >
                {stat}
              </button>))
          }
        </div>
        <div className="roll-container">
          {
            list.map((num, index) => (
              <button
                className="ability-rolled"
                id={[num, index]}
                position={index}
                onClick={e => this.selectRoll(e)}
              >
                {num}
              </button>))
          }
        </div>
        {
          standard.length ? null : <RollButtonView
            addRoll={this.addRoll}
            reroll={this.reroll}
            restart={this.restart}
          />
        }
      </div>
    );
  }
}

export default AbilityRoll;
