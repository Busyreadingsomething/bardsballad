import React from 'react';
import { arrayOf, string, func } from 'prop-types';

const Tab = ({ tabs, select }) => (
  <React.Fragment>
    {
      tabs.map(tab => (
        <button
          key={tab}
          tab={tab}
          className="tab"
          onClick={() => select(tab)}
        >{tab}
        </button>))
    }
  </React.Fragment>
);

Tab.propTypes = {
  tabs: arrayOf(string).isRequired,
  select: func.isRequired,
};

export default Tab;
