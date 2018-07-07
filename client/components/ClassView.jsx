import React from 'react';
import { func, string } from 'prop-types';

const ClassView = ({ setClass, value }) => {
  const focused = value === '' ? 'empty' : 'focused';
  return (
    <div className="input-wrapper">
      <select className="gen-profile-input" value={value} onChange={e => setClass(e)}>
        <option value=""></option>
        <option value="barbarian">Barbarian</option>
        <option value="bard">Bard</option>
        <option value="cleric">Cleric</option>
        <option value="druid">Druid</option>
        <option value="fighter">Fighter</option>
        <option value="monk">Monk</option>
        <option value="paladin">Paladin</option>
        <option value="ranger">Ranger</option>
        <option value="rogue">Rogue</option>
        <option value="sorceror">Sorceror</option>
        <option value="warlock">Warlock</option>
        <option value="wizard">Wizard</option>
      </select>
      <label className={`select-label ${focused}`}> Class</label>
    </div>
  );
};

ClassView.propTypes = {
  setClass: func.isRequired,
  value: string.isRequired,
};

export default ClassView;
