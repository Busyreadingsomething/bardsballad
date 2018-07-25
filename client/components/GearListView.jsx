import React from 'react';
import PropTypes from 'prop-types';

class GearListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'Weapons',
      tabs: ['Weapons', 'Armor', 'Spells', 'Gear'],
    };
  }

  handleClick = () => {
    console.log('HELLO THERE');
  }

  render() {
    const { tabs } = this.state;
    return (
      <div className="gear-container card">
        <p className="card-title">Equipment</p>
        <div className="tab-selection">
          {
            tabs.map(tab => <p key={tab} tab={tab} className="tab" onClick={this.handleClick}>{tab}</p>)
          }
        </div>
      </div>
    );
  }
}

GearListView.propTypes = {};

export default GearListView;
