import helpers from './helpers';

const {
  setProfile,
  setRace,
  setClass,
  setRolls,
  setAbilityStat,
  setFinalAbility,
  setAttribute,
} = helpers;

const generateSheet = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return setProfile(state, action);
    case 'UPDATE_RACE':
      return setRace(state, action);
    case 'UPDATE_CLASS':
      return setClass(state, action);
    case 'PICK_ROLL':
      return setRolls(state, action.rollSelect);
    case 'SET_SCORE':
      return state
        .update('currentValue', () => action.val)
        .update('currentIndex', () => action.index);
    case 'UPDATE_HOLDER':
      return setAbilityStat(state, action.stat);
    case 'SET_ABILITY':
      return setFinalAbility(state);
    case 'UPDATE_ATTR':
      return setAttribute(state, action);
    case 'MAKE_CHARACTER':
      return state.update('madeCharacter', () => true);
    case 'NEXT_PAGE':
      return state.update('genPage', page => page + 1);
    default:
      return state;
  }
};

export default generateSheet;
