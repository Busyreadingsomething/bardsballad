import { fromJS } from 'immutable';
import character from '../../practiceData/genCharacter';
import helpers from './helpers';

const setAttribute = (state, action) => {
  const { attr, prof, index } = action;
  let newState = state;
  const proficient = state.getIn([prof, attr, 'proficient']);
  const rule = state.getIn(['charClass', prof, index, 'rule']);

  if (proficient) {
    newState = state
      .updateIn([prof, attr, 'val'], val => val - 2)
      .updateIn([prof, attr, 'proficient'], selected => !selected)
      .updateIn(['charClass', prof, index, 'rule'], () => rule + 1);
  } else if (rule !== 0) {
    newState = state
      .updateIn([prof, attr, 'val'], val => val + 2)
      .updateIn([prof, attr, 'proficient'], selected => !selected)
      .updateIn(['charClass', prof, index, 'rule'], () => rule - 1);
  }

  return newState;
};


const generateSheet = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return state
        .updateIn(action.prop, () => action.value);
    case 'UPDATE_RACE':
      return state
        .update('race', () => fromJS(character.genRace(action.race)));
    case 'UPDATE_CLASS':
      return state
        .update('charClass', () => fromJS(character.genClass(action.className)));
    case 'PICK_ROLL':
      return helpers.setRolls(state, action.rollSelect);
    case 'SET_SCORE':
      return state
        .update('currentValue', () => action.val)
        .update('currentIndex', () => action.index);
    case 'UPDATE_HOLDER':
      return helpers.setAbilityStat(state, action.stat);
    case 'SET_ABILITY':
      return helpers.setFinalAbility(state);
    case 'UPDATE_ATTR':
      return setAttribute(state, action);
    case 'MAKE_CHARACTER':
      return state.update('madeCharacter', () => true);
    default:
      return state;
  }
};

export default generateSheet;
