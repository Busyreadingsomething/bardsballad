import React from 'react';
import { number } from 'prop-types';

const ModView = ({ mod }) => (
  <div className="mod-container">
    {`+${mod}`}
  </div>
);

ModView.propTypes = {
  mod: number.isRequired,
};

export default ModView;
