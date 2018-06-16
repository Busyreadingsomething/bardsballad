import React from 'react';
import { func } from 'prop-types';


const AgeView = ({ setAge }) => (
  <div>
    <label className="gen-age">Age
      <input id="profile-age" type="number" onKeyUp={e => setAge(e)} />
    </label>
  </div>
);

AgeView.propTypes = {
  setAge: func.isRequired,
};

export default AgeView;
