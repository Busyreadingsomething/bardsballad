import React from 'react';
import PropTypes from 'prop-types';
import GearView from './GearViewList/GearView';
import genGear from '../../practiceData/item';

const gear = genGear();

class GearListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Weapons',
      tabs: ['Weapons', 'Armor', 'Spells', 'Gear'],
    };
  }

  handleClick = (tab) => {
    this.setState({ current: tab }, () => console.log(this.state));
  }

  render() {
    const { current, tabs } = this.state;
    // be sure to get the gear from the redux store
    const items = gear[current.toLowerCase()];
    return (
      <div className="gear-container card">
        <p className="card-title">Equipment</p>
        <div className="tab-selection">
          {
            tabs.map(tab => <p key={tab} tab={tab} className="tab" onClick={() => this.handleClick(tab)}>{tab}</p>)
          }
        </div>
        <GearView tab={current} items={items}/>
      </div>
    );
  }
}

GearListView.propTypes = {};

export default GearListView;
