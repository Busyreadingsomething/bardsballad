import React from 'react';
import PropTypes from 'prop-types';

class GearView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    );
  }
}

GearView.propTypes = {};

export default GearView;
