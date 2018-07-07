import React from 'react';
import { func, string } from 'prop-types';

const RaceView = ({ setRace, value }) => {
  const focused = value === '' ? 'empty' : 'focused';
  return (
    <div className="input-wrapper">
      <select
        id="race"
        className="gen-profile-input"
        onChange={e => setRace(e)}
      >
        <option value="" />
        <option value="dragonborne">Dragonborne</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
        <option value="gnome">Gnome</option>
        <option value="half-elf">Half Elf</option>
        <option value="half-orc">Half Orc</option>
        <option value="halfing">Halfling</option>
        <option value="human">Human</option>
        <option value="tiefling">Tiefling</option>
      </select>
      <label className={`select-label ${focused}`}>Race</label>
    </div>
  )
};

RaceView.propTypes = {
  setRace: func.isRequired,
  value: string.isRequired,
};

export default RaceView;
