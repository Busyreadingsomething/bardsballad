import React from 'react';
import { func, string } from 'prop-types';

const AlignView = ({ setAlign, value }) => {
  const focused = value === '' ? 'empty' : 'focused';
  return (
    <div className="input-wrapper">
      <select data-path="profile-align" className="gen-profile-input" value={value} onChange={e => setAlign(e)}>
        <option value=""></option>
        <option value="LAWFUL GOOD">Lawful Good</option>
        <option value="NEUTRAL GOOD">Neutral Good</option>
        <option value="CHAOTIC GOOD">Chaotic Good</option>
        <option value="LAWFUL NEUTRAL">Lawful Neutral</option>
        <option value="NEUTRAL">Neutral</option>
        <option value="CHAOTIC NEUTRAL">Chaotic Neutral</option>
        <option value="LAWFUL EVIL">Lawful Evil</option>
        <option value="NEUTRAL EVIL">Neutral Evil</option>
        <option value="CHAOTIC EVIL">Chaotic Evil</option>
      </select>
      <label className={`select-label ${focused}`}>Alignment</label>
    </div>
  )
};

AlignView.propTypes = {
  setAlign: func.isRequired,
  value: string.isRequired,
};

export default AlignView;
