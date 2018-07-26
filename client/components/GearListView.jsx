import React from 'react';
import PropTypes from 'prop-types';
import GearView from './GearViewList/GearView';
import Tab from './GearViewList/TabView';
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
        <Tab tabs={tabs} select={this.handleClick}/>
        <GearView tab={current} items={items}/>
      </div>
    );
  }
}

GearListView.propTypes = {};

export default GearListView;
