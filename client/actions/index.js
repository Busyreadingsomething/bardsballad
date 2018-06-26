import actionTypes from '../actionTypes';

export const updateProfile = profile => ({
  type: actionTypes.UPDATE_PROFILE,
  prop: profile.target.id.split('-'),
  value: profile.target.value,
});

export const updateClass = className => ({
  type: actionTypes.UPDATE_CLASS,
  className: className.target.value,
});

export const updateRace = race => ({
  type: actionTypes.UPDATE_RACE,
  race: race.target.value,
});

export const pickRoll = roll => ({
  type: actionTypes.PICK_ROLL,
  rollSelect: roll.target.value,
});

export const setScore = (val, index) => ({
  type: actionTypes.SET_SCORE,
  val,
  index,
});

export const updateHolder = stat => ({
  type: actionTypes.UPDATE_HOLDER,
  stat,
});

export const setAbility = () => ({
  type: actionTypes.SET_ABILITY,
});

export const updateAttr = (index, attr, prof) => ({
  type: actionTypes.UPDATE_ATTR,
  index,
  attr,
  prof,
});

export const makeCharacter = () => ({
  type: actionTypes.MAKE_CHARACTER,
});

export default {
  updateProfile,
  updateClass,
  updateRace,
  updateAttr,
  pickRoll,
  setScore,
  updateHolder,
  setAbility,
  makeCharacter,
};
