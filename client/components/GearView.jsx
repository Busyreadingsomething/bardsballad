import React from 'react';
import PropTypes from 'prop-types';

class GearView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  handleClick = () => {
    console.log('HELLO THERE');
  }

  render() {
    return (
      <div className="gear-container">
        <h1>Equipment</h1>
        <div>
          <h2 onClick={this.handleClick}>Weapons</h2>
          <h2 onClick={this.handleClick}>Armor</h2>
          <h2 onClick={this.handleClick}>Spells</h2>
          <h2 onClick={this.handleClick}>Gear</h2>
        </div>
      </div>
    );
  }
}

GearView.propTypes = {};

export default GearView;
