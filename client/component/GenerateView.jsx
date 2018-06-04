import React from 'react';
import ProfileGenView from './ProfileGenView';
import ScoreGenContainer from './containers/ScoreGenContainer';
import ClassContainer from './containers/ClassContainer';
import AbilityRollContainer from './containers/AbilityRollContainer';
import AlignContainer from './containers/AlignContainer';
import AttributeSelectorView from './AttributeSelectorView';

class GenerateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: null,
    };
  }

  render() {
    const { point } = this.state;
    return (
      <div className="gen-container">
        <ProfileGenView />
        <ScoreGenContainer />
        <div className="gen-dropdowns">
          <ClassContainer />
          <AlignContainer />
        </div>
        {
          point === 'roll' ? <AbilityRollContainer
            standard={[]}
          /> : null
        }
        {
          point === 'standard' ? <AbilityRollContainer
            standard={[15, 14, 13, 12, 10, 18]}
          /> : null
        }
        <AttributeSelectorView />
        <button className="gen-submit" onClick={this.props.generate}>SUBMIT</button>
      </div>
    );
  }
}

export default GenerateView;
