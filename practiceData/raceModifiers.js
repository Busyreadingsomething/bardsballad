const skillsList = [
  'acrobatics',
  'animal handling',
  'arcana',
  'atheltics',
  'deception',
  'history',
  'insight',
  'intimidation',
  'investigation',
  'medicine',
  'nature',
  'perception',
  'performance',
  'persuasion',
  'religion',
  'sleight of hand',
  'stealth',
  'survival',
];

const raceModifiers = {
  dragonborne: {
    str: 2,
    cha: 1,
  },
  dwarf: {
    con: 2,
  },
  elf: {
    dex: 2,
  },
  gnome: {
    int: 2,
  },
  'half-elf': {
    cha: 2,
  },
  'half-orc': {
    str: 2,
    Con: 1,
  },
  halfling: {
    dex: 2,
  },
  human: {
    str: 1,
    dex: 1,
    con: 1,
    int: 1,
    wis: 1,
    cha: 1,
  },
  tiefling: {
    int: 1,
    cha: 2,
  },
};

const raceProficiencies = {
  dwarf: {
    type: 'Tool Proficiency',
    rule: 1,
    list: ['Brewer\'s Supplies', 'Smith\'s Tools', 'Mason\'s Tools'],
  },
  'half-elf': {
    type: 'Skill Proficiency',
    rule: 2,
    list: skillsList,
  },
};

export default raceModifiers;
