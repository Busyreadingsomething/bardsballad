import { createStore } from 'redux';
import { fromJS } from 'immutable';
import generateSheet from '../reducers/generateSheet';
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

const blankCharacter = character.genCharacter(fillerScores, 'BORT', 'MALE', '5ft 3', 31, 'silver', 'green', 'GOOD', 'elf', 'bard', testWeapons, testSpells);

const initialState = fromJS({
  character: blankCharacter,
  data: generator(),
});

const store = createStore(
  generateSheet,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
