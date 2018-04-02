import React from 'react';

const SelectRoll = ({roll}) => (
  <div className="roll-select-container">
    <input type="radio" id="gen-roll" value="roll" name="roll" onClick={roll} /> Roll <br></br>
    <input type="radio" id="gen-standard" value="standard" name="roll" onClick={roll}  /> Standard <br></br>
    <input type="radio" id="gen-point-buy" value="point-buy" name="roll" onClick={roll}  /> Point Buy <br></br>
  </div>
);

export default SelectRoll;
