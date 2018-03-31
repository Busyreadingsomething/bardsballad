import React from 'react';
import ScoreView from './ScoreView';

class AbilityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abilityScores: this.props.scores,
      abilities: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
    };
  }

  render() {
    return (
      <div>
        {
          this.state.abilities.map(score =>
            (<ScoreView
              key={score}
              score={this.state.abilityScores[score]}
            />))
        }
      </div>
    );
  }
}

export default AbilityView;
