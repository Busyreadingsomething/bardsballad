import { fromJS } from 'immutable';
import character from '../../../practiceData/genCharacter';
import helpers from './helpers';

const setAttribute = (state, action) => {
  const { index, attr, prof } = action;
  const item = state.getIn([prof, attr]).toJS();
  const { proficient } = item;

  item.val = proficient ? item.val - 2 : item.val + 2;
  item.proficient = !item.proficient;

  return state.updateIn([prof, attr], () => fromJS(item));
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
    default:
      return state;
  }
};

export default generateSheet;
