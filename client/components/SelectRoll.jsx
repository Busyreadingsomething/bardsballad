import React from 'react';
import { func } from 'prop-types';

const SelectRoll = ({ roll }) => (
  <div className="roll-select-container">
    <label>
      <input
        type="radio"
        id="gen-roll"
        className="gen-select-roll"
        value="roll"
        name="roll"
        onClick={roll}
      />
      <span>Roll</span>
    </label>
    <label>
      <input
        type="radio"
        id="gen-standard"
        className="gen-select-roll"
        value="standard"
        name="roll" 
        onClick={roll}
      />
      <span>Standard</span>
    </label>
    <label>
      <input
        type="radio"
        id="gen-point-buy"
        className="gen-select-roll"
        value="point-buy"
        name="roll"
        onClick={roll}
      />
      <span>Point Buy</span>
    </label>
  </div>
);

SelectRoll.propTypes = {
  roll: func.isRequired,
};

export default SelectRoll;
