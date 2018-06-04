import React from 'react';
import GenerateView from './GenerateView';
import CharacterView from './CharacterView';

class SheetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeCharacter: false,
    };
    this.generateCharacter = this.generateCharacter.bind(this);
  }

  generateCharacter() {
    this.setState({
      madeCharacter: true,
    }, () => console.log(this.state));
  }

  render() {
    const { madeCharacter } = this.state;

    return (
      <div className="main-container">
        {
          madeCharacter
            ? <CharacterView />
            : <GenerateView generate={this.generateCharacter} />
        }
      </div>
    );
  }
}

export default SheetView;
