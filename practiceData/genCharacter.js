import { raceList, skillsList } from './raceModifiers';
import classList from './classList';

const emptyScores = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
};

const emptyMoney = {
  cp: 0,
  sp: 0,
  gp: 0,
  pp: 0,
};

const savesList = {
  str: ['saving', 'athletics'],
  dex: ['saving', 'acrobatics', 'slightOfHand', 'stealth'],
  con: ['saving'],
  int: ['saving', 'arcana', 'history', 'investigation', 'nature', 'religion'],
  wis: ['saving', 'animalHandling', 'insight', 'medicine', 'perception', 'survival'],
  cha: ['saving', 'deception', 'intimidation', 'performance', 'persuasion'],
};

const genRaceMods = (mods) => {
  const boosts = mods || {};
  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const base = {};
  stats.forEach((stat) => {
    base[stat] = 0;
  });

  return Object.assign(base, boosts);
};

const genSaves = (stat, mod) => {
  const saves = {};
  savesList[stat].forEach((save) => {
    saves[save] = mod;
  });

  return saves;
};

const genStat = (value, stat) => {
  const score = {};
  score.value = value;
  score.mod = Math.floor((value - 10) / 2);
  score.saves = genSaves(stat, score.mod);

  return score;
};

const genAbility = (scores) => {
  const ability = {};
  const stats = scores || emptyScores;
  Object.keys(stats).forEach((stat) => {
    ability[stat] = genStat(stats[stat], stat);
  });

  return ability;
};

const genProfile = (name, gender, height, age, hair, eye, align) => {
  const profile = {};
  profile.name = name;
  profile.gender = gender;
  profile.height = height;
  profile.age = age;
  profile.hair = hair;
  profile.eye = eye;
  profile.align = align;

  return profile;
};

const genRace = (raceName) => {
  let race = {};
  race.name = '';
  if (raceName && raceList[raceName]) {
    race.name = raceName;
    race = Object.assign(race, raceList[raceName]);
    race.modifiers = genRaceMods(raceList[raceName].modifiers);
  }

  return race;
};

const genClass = (className) => {
  const charClass = {};
  charClass.name = '';
  charClass.hitDie = null;
  charClass.spells = [];
  charClass.saves = [];
  charClass.proficiencies = [];
  charClass.styles = [];
  charClass.features = [];

  if (className in classList) {
    charClass.name = className;
    charClass.hitDie = classList[className].die;
    charClass.spells = classList[className].spells;
    charClass.saves = classList[className].saves;
    charClass.proficiencies = classList[className].proficiencies;
    charClass.styles = classList[className].styles;
    charClass.features = classList[className].features;
  }

  return charClass;
};

const genStatus = () => ({
  level: 0,
  experience: Math.floor(Math.random() * 201),
  nextLevel: 200,
  maxHP: null,
  currentHP: null,
  tempHP: null,
  armorClass: null,
  speed: null,
  init: null,
  saves: {
    success: [null, null, null],
    failures: [null, null, null],
  },
  images: ['assets/8_bit.jpg', 'assets/16_bit.jpg', 'assets/64_bit.jpg', 'assets/switch_bit.jpg'],
});

const genGear = (weapons, spells, money) => {
  const gear = {};
  const weaponList = weapons || [];
  const spellList = spells || [];
  gear.weapons = [...weaponList];
  gear.spells = [...spellList];
  gear.money = money || emptyMoney;

  return gear;
};

const genNotes = () => {
  const notes = {};
  notes.styles = [];
  notes.description = '';
  return notes;
};

const genProficiencies = () => ({
  acrobatics: {
    val: 0,
    proficient: false,
    base: 'dex',
  },
  'animal handling': {
    val: 0,
    proficient: false,
    base: 'wis',
  },
  arcana: {
    val: 0,
    proficient: false,
    base: 'int',
  },
  athletics: {
    val: 0,
    proficient: false,
    base: 'str',
  },
  deception: {
    val: 0,
    proficient: false,
    base: 'cha',
  },
  history: {
    val: 0,
    proficient: false,
    base: 'int',
  },
  insight: {
    val: 0,
    proficient: false,
    base: 'wis',
  },
  intimidation: {
    val: 0,
    proficient: false,
    base: 'cha',
  },
  investigation: {
    val: 0,
    proficient: false,
    base: 'int',
  },
  medicine: {
    val: 0,
    proficient: false,
    base: 'wis',
  },
  nature: {
    val: 0,
    proficient: false,
    base: 'int',
  },
  perception: {
    val: 0,
    proficient: false,
    base: 'wis',
  },
  performance: {
    val: 0,
    proficient: false,
    base: 'cha',
  },
  persuasion: {
    val: 0,
    proficient: false,
    base: 'cha',
  },
  religion: {
    val: 0,
    proficient: false,
    base: 'int',
  },
  'sleight of hand': {
    val: 0,
    proficient: false,
    base: 'dex',
  },
  stealth: {
    val: 0,
    proficient: false,
    base: 'dex',
  },
  survival: {
    val: 0,
    proficient: false,
    base: 'wis',
  },
  list: skillsList,
});

const testWeapon1 = {
  id: 'wp1234567',
  name: 'Long Sword',
  dice: 1,
  dieType: 8,
  rolled: false,
  description: 'This is the mystical TEST blade. When people weild it, will demonstrate what it is supposed to look like and people can play around with it. Indeed a formidable blade',
};

const testWeapon2 = {
  id: 'wp1237890',
  name: 'Hammer of Thor',
  dice: 2,
  dieType: 10,
  rolled: false,
  description: 'This is Thor\'s hammer. Kratos will probably kill him in the next game...',
};

const testSpell1 = {
  id: 'sp5201c2',
  name: 'Rage of the Valkyries',
  level: 1,
  time: 'instant',
  duration: '2 turns',
  range: ['Self'],
  save: null,
  effect: 'buff',
  description: 'This is pretty much boost your power. Also this is a fake spell. Testing and stuff. However, I\'d think that they should have a spell like this in the real game.',
};

const testSpell2 = {
  id: 'sp4z21b9',
  name: 'Laufey',
  level: 3,
  time: '2 turns',
  duration: 'instant',
  range: ['10ft'],
  save: 'dex',
  effect: 'push',
  dieType: 20,
  dice: 2,
  description: 'Fey will punch someone in the face...with a spell...like a giant. Also this is a fake spell. Testing and stuff. However, I\'d think that they should have a spell like this in the real game.',
};

const genCharacter = (
  scores,
  name,
  gender,
  height,
  age,
  hair,
  eye,
  align,
  raceName,
  className,
  weapons,
  spells,
  money,
) => {
  const character = {};

  character.ability = genAbility(scores);
  character.profile = genProfile(name, gender, height, age, hair, eye, align);
  character.race = genRace(raceName);
  character.charClass = genClass(className);
  character.status = genStatus();
  character.proficiencies = genProficiencies();
  character.gear = genGear(weapons, spells, money);
  character.equipped = {
    weapons: [testWeapon1, testWeapon2, testWeapon1],
    spells: [testSpell1, testSpell2],
    armor: [],
  };
  character.notes = genNotes();
  character.genList = ['profile', 'score', 'class', 'attributes'];
  character.genPage = 0;
  character.madeCharacter = false;
  character.stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  character.currentValue = null;
  character.currentIndex = null;
  character.rollSelect = '';
  character.holder = {};

  character.stats.forEach((stat) => {
    character.holder[stat] = {
      val: 0,
      selected: false,
    };
  });
  character.rolls = [];
  character.rollKeys = ['roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6'];
  character.classProficiencies = [];
  character.raceProficiencies = [];

  return character;
};

export default {
  genRaceMods,
  genSaves,
  genStat,
  genAbility,
  genProfile,
  genClass,
  genRace,
  genStatus,
  genGear,
  genCharacter,
  genProficiencies,
};
