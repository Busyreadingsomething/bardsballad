import actionTypes from '../actionTypes';

const updateProfile = profile => ({
  type: actionTypes.UPDATE_PROFILE,
  prop: profile.target.id.split('-'),
  value: profile.target.value,
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
  updateProfile,
  updateClass,
  updateRace,
  pickRoll,
};

export default actions;
