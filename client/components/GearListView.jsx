import React from 'react';
import PropTypes from 'prop-types';
import GearView from './GearViewList/GearView';

class GearListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Weapons',
      tabs: ['Weapons', 'Armor', 'Spells', 'Gear'],
    };
  }

  handleClick = (tab) => {
    console.log('HELLO THERE', tab);
  }

  render() {
    const { current, tabs } = this.state;
    return (
      <div className="gear-container card">
        <p className="card-title">Equipment</p>
        <div className="tab-selection">
          {
            tabs.map(tab => <p key={tab} tab={tab} className="tab" onClick={() => this.handleClick(tab)}>{tab}</p>)
          }
        </div>
        <GearView tab={current} items="OBJECT_FROM_REDUX"/>
      </div>
    );
  }
}

GearListView.propTypes = {};

export default GearListView;
