export const skillsList = [
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

export const raceList = {
  dragonborne: {
    modifiers: {
      str: 2,
      cha: 1,
    },
    select: null,
    languages: ['Common', 'Dwarvish'],
    proficiencies: [],
    size: 'medium',
    speed: 30,
    subrace: [
      {
        name: 'Black',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Acid',
      },
      {
        name: 'Blue',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Lightning',
      },
      {
        name: 'Brass',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Fire',
      },
      {
        name: 'Bronze',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Lightning',
      },
      {
        name: 'Copper',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Acid',
      },
      {
        name: 'Gold',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Fire',
      },
      {
        name: 'Green',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Poison',
      },
      {
        name: 'Red',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Fire',
      },
      {
        name: 'Silver',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Cold',
      },
      {
        name: 'White',
        ability: null,
        traits: [
          {
            name: 'Breadth Weapon',
          },
          {
            name: 'Damage Resistance',
          },
        ],
        type: 'Cold',
      },
    ],
    traits: [],
  },
  dwarf: {
    modifiers: {
      con: 2,
    },
    select: null,
    languages: ['Common', 'Dwarvish'],
    proficiencies: [{
      type: 'Tool Proficiency',
      rule: 1,
      list: ['Brewer\'s Supplies', 'Smith\'s Tools', 'Mason\'s Tools'],
    }],
    size: 'medium',
    speed: 25,
    subrace: [
      {
        name: 'Hill Dwarf',
        ability: {
          wis: 1,
        },
        traits: [{
          name: 'Dwarven Toughness',
        }],
      },
    ],
    traits: [
      {
        name: 'Darkvision',
      },
      {
        name: 'Dwarven Resilience',
      },
      {
        name: 'Dwarven Combat Training',
        proficiencies: ['battleaxe', 'handaxe', 'light hammer', 'warhammer'],
        description: '',
      },
    ],
  },
  elf: {
    modifiers: {
      dex: 2,
    },
    select: null,
    languages: ['Common', 'Elivish'],
    proficiencies: [],
    size: 'medium',
    speed: 30,
    subrace: [
      {
        name: 'High Elf',
        ability: {
          int: 1,
        },
        proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        traits: [
          {
            name: 'Dwarven Toughness',
          },
          {
            name: 'Elf Weapon Training',
          },
          {
            name: 'Cantrip',
          },
          {
            name: 'Extra Language',
          },
        ],
      },
    ],
    traits: [
      {
        name: 'Darkvision',
      },
      {
        name: 'Fey Ancestry',
      },
      {
        name: 'Trance',
      },
      {
        name: 'Keen Senses',
      },
    ],
  },
  gnome: {
    modifiers: {
      int: 2,
    },
    select: null,
    languages: ['Common', 'Gnomish'],
    proficiencies: [],
    size: 'small',
    speed: 25,
    subrace: [
      {
        name: 'Rock Gnome',
        ability: {
          con: 1,
        },
        traits: [
          {
            name: 'Dwarven Toughness',
          },
          {
            name: 'Artificers Lore',
          },
          {
            name: 'Tinker',
          },
        ],
      },
    ],
    traits: [
      {
        name: 'Darkvision',
      },
      {
        name: 'Gnome Cunning',
      },
    ],
  },
  'half-elf': {
    modifiers: {
      cha: 2,
    },
    select: {
      rule: 2,
      scores: {
        str: false,
        dex: false,
        con: false,
        int: false,
        wis: false,
        cha: false,
      },
    },
    languages: ['Common', 'Elvish'],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: skillsList,
    }],
    size: 'medium',
    speed: 30,
    subrace: [],
    traits: [
      {
        name: 'Darkvision',
      },
      {
        name: 'Fey Ancestry',
      },
      {
        name: 'Skill Versatility',
      },
    ],
  },
  'half-orc': {
    modifiers: {
      str: 2,
      con: 1,
    },
    select: null,
    languages: ['Common', 'Orc'],
    proficiencies: [],
    size: 'medium',
    speed: 30,
    subrace: [],
    traits: [
      {
        name: 'Darkvision',
      },
      {
        name: 'Menacing',
      },
      {
        name: 'Relentless Endurance',
      },
      {
        name: 'Savage Attack',
      },
    ],
  },
  halfling: {
    modifiers: {
      dex: 2,
    },
    select: null,
    languages: ['Common', 'Halfling'],
    proficiencies: ['battleaxe', 'handaxe', 'light hammer', 'warhammer'],
    size: 'small',
    speed: 25,
    subrace: [
      {
        name: 'Lightfoot',
        ability: {
          cha: 1,
        },
        traits: [{
          name: 'Naturally Stealthy',
        }],
      },
    ],
    traits: [
      {
        name: 'Lucky',
      },
      {
        name: 'Brave',
      },
      {
        name: 'Halfling Nimbleness',
      },
    ],
  },
  human: {
    modifiers: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
    },
    select: null,
    languages: ['Common', 'EXTRA LANGUAGE'],
    proficiencies: [],
    size: 'medium',
    speed: 25,
    subrace: [],
    traits: [],
  },
  tiefling: {
    modifiers: {
      int: 1,
      cha: 2,
    },
    select: null,
    languages: ['Common', 'Infernal'],
    proficiencies: [],
    size: 'medium',
    speed: 30,
    subrace: [],
    traits: [
      {
        name: 'Darkvision',
      },
      {
        name: 'Hellish Resistance',
      },
      {
        name: 'Infernal Legacy',
      },
    ],
  },
};

const proficiencies = {
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

export default {
  proficiencies,
  skillsList,
  raceList,
};
