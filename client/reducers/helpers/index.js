import { fromJS } from 'immutable';
import character from '../../../practiceData/genCharacter';
import rolls from '../../../practiceData/genRolls';

const setAbilityStat = (state, stat) => {
  let updatedState = state;
  const updated = state.getIn(['holder', stat, 'selected']);
  const val = state.get('currentValue');
  const position = state.get('currentIndex');

  if (val && !updated) {
    updatedState = state
      .update('currentValue', () => null)
      .update('currentIndex', () => null)
      .updateIn(['rolls', position], () => 'DONE')
      .updateIn(['holder', stat, 'val'], () => val)
      .updateIn(['holder', stat, 'selected'], () => true);
  }

  return updatedState;
};

const setFinalAbility = (state) => {
  let updatedState = state;
  const holder = state.get('holder').toJS();
  const proficiencies = state.get('proficiencies').toJS();
  const isReady = Object.keys(holder).every(stat => holder[stat].selected);

  if (isReady) {
    const scores = Object.keys(holder).reduce((acc, stat) => {
      acc[stat] = holder[stat].val;
      return acc;
    }, {});
    proficiencies.list.forEach((skill) => {
      const { base } = proficiencies[skill];
      const mod = Math.floor((scores[base] - 10) / 2);
      proficiencies[skill].val = mod;
    });
    const ability = character.genAbility(scores);
    updatedState = updatedState
      .update('ability', () => fromJS(ability))
      .update('proficiencies', () => fromJS(proficiencies));
  }

  return updatedState;
};

const setRolls = (state, select) => {
  let updatedState = state.update('rollSelect', () => select);

  if (select === 'standard') {
    updatedState = updatedState.update('rolls', () => fromJS(rolls.genStandard()));
  } else if (select === 'roll') {
    updatedState = updatedState.update('rolls', () => fromJS(rolls.genRollList()));
  }

  return updatedState;
};

const setProfile = (state, action) => state.updateIn(action.prop, () => action.value);

const setRace = (state, action) => state.update('race', () => fromJS(character.genRace(action.race)));

const setClass = (state, action) => state.update('charClass', () => fromJS(character.genClass(action.className)));

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

export default {
  setAbilityStat,
  setFinalAbility,
  setRolls,
  setProfile,
  setRace,
  setClass,
  setAttribute,
};
