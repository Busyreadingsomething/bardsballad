import { fromJS } from 'immutable';
import character from '../../../practiceData/genCharacter';
import generator from '../../../practiceData/generatorData';

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


const blankCharacter = character.genCharacter(fillerScores, 'BORT', 'MALE', 'GOOD', 'elf', 'bard', testWeapons, testSpells);
const initialState = fromJS({
  character: blankCharacter,
  data: generator(),
});

const generateSheet = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return state.updateIn(['character', 'profile', 'name'], () => action.name);
    case 'UPDATE_ALIGN':
      return state.updateIn(['character', 'profile', 'align'], () => action.align);
    case 'UPDATE_RACE':
      return state.updateIn(['character', 'race'], () => fromJS(character.genRace(action.race)));
    case 'UPDATE_CLASS':
      return state.updateIn(['character', 'charClass'], () => fromJS(character.genClass(action.className)));
    case 'PICK_ROLL':
      return state.updateIn(['data', 'roll'], () => action.roll);
    default:
      return state;
  }
};

export default generateSheet;
