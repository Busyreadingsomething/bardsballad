import { fromJS } from 'immutable';
import character from '../../../practiceData/genCharacter';
import generator from '../../../practiceData/generatorData';
import rolls from '../../../practiceData/genRolls';

const fillerScores = {
  str: 13,
  dex: 15,
  con: 12,
  int: 16,
  wis: 12,
  cha: 16,
};
const testWeapons = [
  {
    id: 'w1234',
    dieType: 6,
    name: 'Dagger',
    dice: 1,
    description: 'This is test dagger.',
  },
  {
    id: 'w1112',
    dieType: 8,
    name: 'Long Sword',
    dice: 1,
    description: 'This is a test long sword.',
  },
];

const testSpells = [
  {
    id: 's1234',
    name: 'Burning Hands',
    level: 1,
    time: '1 Action',
    duration: 'Instant',
    range: ['15ft', 'self'],
    save: 'DEX',
    effect: 'You burn people with really warm hands...',
  },
  {
    id: 's1112',
    name: 'Charm Person',
    level: 1,
    time: '1 Action',
    duration: '1 Hour',
    range: ['15ft'],
    save: 'WIS',
    effect: 'You are so charming that people occasionally want to talk to you...',
  },
];

const setAbilityStat = (state, stat) => {
  let updatedState = state;
  const updated = state.getIn(['data', 'holder', stat, 'selected']);
  const val = state.getIn(['data', 'currentValue']);
  const position = state.getIn(['data', 'currentIndex']);

  if (val && !updated) {
    updatedState = state
      .updateIn(['data', 'currentValue'], () => null)
      .updateIn(['data', 'currentIndex'], () => null)
      .updateIn(['data', 'rolls', position], () => 'DONE')
      .updateIn(['data', 'holder', stat, 'val'], () => val)
      .updateIn(['data', 'holder', stat, 'selected'], () => true);
  }

  return updatedState;
};

const setFinalAbility = (state) => {
  let updatedState = state;
  const holder = state.getIn(['data', 'holder']).toJS();
  const isReady = Object.keys(holder).every(stat => holder[stat].selected);

  if (isReady) {
    const scores = Object.keys(holder).reduce((acc, stat) => {
      acc[stat] = holder[stat].val;
      return acc;
    }, {});
    const ability = character.genAbility(scores);
    updatedState = updatedState.updateIn(['character', 'ability'], () => fromJS(ability));
  }

  return updatedState;
};

const setRolls = (state, select) => {
  let updatedState = state.updateIn(['data', 'rollSelect'], () => select);

  if (select === 'standard') {
    updatedState = updatedState.updateIn(['data', 'rolls'], () => fromJS(rolls.genStandard()));
  } else if (select === 'roll') {
    updatedState = updatedState.updateIn(['data', 'rolls'], () => fromJS(rolls.genRollList()));
  }
  console.log(updatedState.getIn(['data', 'rolls']));

  return updatedState;
};

const blankCharacter = character.genCharacter(fillerScores, 'BORT', 'MALE', '5ft 3', 31, 'silver', 'green', 'GOOD', 'elf', 'bard', testWeapons, testSpells);
const initialState = fromJS({
  character: blankCharacter,
  data: generator(),
});

const generateSheet = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return state.updateIn(action.prop, () => action.value);
    case 'UPDATE_RACE':
      return state.updateIn(['character', 'race'], () => fromJS(character.genRace(action.race)));
    case 'UPDATE_CLASS':
      return state.updateIn(['character', 'charClass'], () => fromJS(character.genClass(action.className)));
    case 'PICK_ROLL':
      return setRolls(state, action.rollSelect);
    case 'SET_SCORE':
      return state
        .updateIn(['data', 'currentValue'], () => action.val)
        .updateIn(['data', 'currentIndex'], () => action.index);
    case 'UPDATE_HOLDER':
      return setAbilityStat(state, action.stat);
    case 'SET_ABILITY':
      return setFinalAbility(state);
    default:
      return state;
  }
};

export default generateSheet;
