import React from 'react';
import PropTypes from 'prop-types';

class GearListView extends React.Component {
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
      <div className="gear-container card">
        <p className="card-title">Equipment</p>
        <div className="tab-selection">
          <p className="tab" onClick={this.handleClick}>Weapons</p>
          <p className="tab" onClick={this.handleClick}>Armor</p>
          <p className="tab" onClick={this.handleClick}>Spells</p>
          <p className="tab" onClick={this.handleClick}>Gear</p>
        </div>
      </div>
    );
  }
}

GearView.propTypes = {};

export default GearListView;
