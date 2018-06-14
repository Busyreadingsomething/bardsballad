import { fromJS } from 'immutable';
import character from '../../../../practiceData/genCharacter';
import rolls from '../../../../practiceData/genRolls';

const setAbilityStat = (state, stat) => {
  let updatedState = state;
  const updated = state.getIn(['holder', stat, 'selected']);
  const val = state.getIn(['currentValue']);
  const position = state.getIn(['currentIndex']);

  if (val && !updated) {
    updatedState = state
      .updateIn(['currentValue'], () => null)
      .updateIn(['currentIndex'], () => null)
      .updateIn(['rolls', position], () => 'DONE')
      .updateIn(['holder', stat, 'val'], () => val)
      .updateIn(['holder', stat, 'selected'], () => true);
  }

  return updatedState;
};

const setFinalAbility = (state) => {
  let updatedState = state;
  const holder = state.getIn(['holder']).toJS();
  const proficiencies = state.getIn(['proficiencies']).toJS();
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
      .updateIn(['ability'], () => fromJS(ability))
      .updateIn(['proficiencies'], () => fromJS(proficiencies));
  }

  return updatedState;
};

const setRolls = (state, select) => {
  let updatedState = state.updateIn(['rollSelect'], () => select);

  if (select === 'standard') {
    updatedState = updatedState.updateIn(['rolls'], () => fromJS(rolls.genStandard()));
  } else if (select === 'roll') {
    updatedState = updatedState.updateIn(['rolls'], () => fromJS(rolls.genRollList()));
  }

  return updatedState;
};

export default {
  setAbilityStat,
  setFinalAbility,
  setRolls,
};
