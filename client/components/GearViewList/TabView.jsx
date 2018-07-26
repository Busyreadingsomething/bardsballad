import React from 'react';
import { arrayOf, string, func } from 'prop-types';

const Tab = ({ tabs, select }) => (
  <div className="tab-selection primary">
    {
      tabs.map(tab => (
        <button
          key={tab}
          tab={tab}
          className="tab primary"
          onClick={() => select(tab)}
        >{tab}
        </button>))
    }
  </div>
);

Tab.propTypes = {
  tabs: arrayOf(string).isRequired,
  select: func.isRequired,
};

export default Tab;
