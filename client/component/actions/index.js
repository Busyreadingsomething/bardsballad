import actionTypes from '../actionTypes';

const updateName = name => ({
  type: actionTypes.UPDATE_NAME,
  name: name.target.value,
});

const updateAlign = align => ({
  type: actionTypes.UPDATE_ALIGN,
  align: align.target.value,
});

const updateClass = className => ({
  type: actionTypes.UPDATE_CLASS,
  className: className.target.value,
});

const updateRace = race => ({
  type: actionTypes.UPDATE_RACE,
  race: race.target.value,
});

const pickRoll = roll => ({
  type: actionTypes.PICK_ROLL,
  roll: roll.target.value,
});

const actions = {
  updateName,
  updateAlign,
  updateClass,
  updateRace,
  pickRoll,
};

export default actions;
