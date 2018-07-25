import React from 'react';
import PropTypes from 'prop-types';
import GearView from './GearViewList/GearView';

const items = [
  {
    id: 'w1234',
    dieType: 6,
    name: 'Dagger',
    dice: 1,
    description: 'This is test dagger.',
    proficient: true,
    bonus: 3,
  },
  {
    id: 'w1112',
    dieType: 8,
    name: 'Long Sword',
    dice: 1,
    description: 'This is a test long sword.',
    proficient: true,
    bonus: 1,
  },
  {
    id: 'w0034',
    dieType: 4,
    name: 'AXE',
    dice: 1,
    description: 'This is test AXE.',
    proficient: true,
    bonus: 3,
  },
  {
    id: 'w9902',
    dieType: 8,
    name: 'SCYTHE',
    dice: 1,
    description: 'Okay this is supposed to be a super secret long descriptive item name that is just a placeholder for more information.',
    proficient: true,
    bonus: 1,
  },
]

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
