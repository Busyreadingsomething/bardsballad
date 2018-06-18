import React from 'react';
import { func } from 'prop-types';

const HairView = ({ setHair }) => (
  <div>
    <label className="gen-hair" >Hair Color
      <input id="profile-hair" type="text" onKeyUp={e => setHair(e)} />
    </label>
  </div>
);

HairView.propTypes = {
  setHair: func.isRequired,
};

export default HairView;
