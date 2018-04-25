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
  className,
});

const updateRace = race => ({
  type: actionTypes.UPDATE_RACE,
  race,
});

const actions = {
  updateName,
  updateAlign,
  updateClass,
  updateRace,
};

export default actions;
