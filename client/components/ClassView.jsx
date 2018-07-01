import React from 'react';
import { func } from 'prop-types';

const ClassView = ({ setClass }) => (
  <label className="gen-label"> Class
    <select className="gen-profile-input" onChange={e => setClass(e)}>
      <option value="">Select a Class</option>
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
  </label>
);

ClassView.propTypes = {
  setClass: func.isRequired,
};

export default ClassView;
