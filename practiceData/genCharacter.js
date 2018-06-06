import raceMod from './raceModifiers';
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

const raceAttributes = {
  dragonborne: [1, 2, 3, 4],
  dwarf: [1, 2, 3, 4],
  elf: [1, 2, 3, 4],
  gnome: [1, 2, 3, 4],
  'half-elf': [1, 2, 3, 4],
  'half-orc': [1, 2, 3, 4],
  halfling: [1, 2, 3, 4],
  human: [1, 2, 3, 4],
  tiefling: [1, 2, 3, 4],
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
  const race = {};
  race.name = raceName || '';
  race.modifiers = genRaceMods(raceMod.abilities[raceName]);
  race.attributes = raceAttributes[raceName] || null;

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
  atheltics: {
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
  list: raceMod.skillsList,
});

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
    weapons: [],
    spells: [],
    armor: [],
  };
  character.stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  character.currentValue = null;
  character.currentIndex = null;
  character.rollSelect = null;
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
