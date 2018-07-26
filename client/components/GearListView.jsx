import React from 'react';
import PropTypes from 'prop-types';
import GearView from './GearViewList/GearView';
import genGear from '../../practiceData/genItems';

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
    this.setState({ current: tab });
  }

  render() {
    const { current, tabs } = this.state;
    // be sure to get the gear from the redux store
    const items = gear[current.toLowerCase()];
    return (
      <div className="gear-container card">
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
