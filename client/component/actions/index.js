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
  rollSelect: roll.target.value,
});

const setScore = (val, index) => ({
  type: actionTypes.SET_SCORE,
  val,
  index,
});

const updateHolder = stat => ({
  type: actionTypes.UPDATE_HOLDER,
  stat,
});

const setAbility = () => ({
  type: actionTypes.SET_ABILITY,
});

const updateAttr = (index, attr, prof) => ({
  type: actionTypes.UPDATE_ATTR,
  index,
  attr,
  prof,
});

const actions = {
  updateProfile,
  updateClass,
  updateRace,
  updateAttr,
  pickRoll,
  setScore,
  updateHolder,
  setAbility,
};

export default actions;
