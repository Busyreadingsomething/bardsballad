import { skillsList } from './raceModifiers';

const classList = {
  barbarian: {
    die: 12,
    saves: ['str', 'con'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['animal handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
    }],
    features: ['features go here'],
  },
  bard: {
    die: 8,
    saves: ['dex', 'cha'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: skillsList,
    },
    {
      type: 'Tool Proficiency: Musical Instruments',
      rule: 3,
      list: ['bagpipes', 'drum', 'dulcimer', 'flute', 'horn', 'lute', 'lyre', 'pan flute', 'shawm', 'viol'],
    }],
    features: ['features go here'],
  },
  cleric: {
    die: 8,
    saves: ['wis', 'cha'],
    spells: [],
    styles: [{
      type: 'Divine Domain',
      rule: 1,
      list: ['life domain'],
    }],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
    }],
    features: ['features go here'],
  },
  druid: {
    die: 8,
    saves: ['int', 'wis'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['animal handling', 'arcana', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
    }],
    features: ['features go here'],
  },
  fighter: {
    die: 10,
    saves: ['str', 'con'],
    spells: [],
    styles: [{
      type: 'Fighting Style',
      rule: 1,
      list: ['archery', 'defense', 'dueling', 'great weapon fighting', 'protection', 'two weapon fighting'],
    }],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['acrobatics', 'animal handling', 'atheltics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
    }],
    features: ['features go here'],
  },
  monk: {
    die: 8,
    saves: ['str', 'dex'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
    },
    {
      type: 'Tool Proficiencies',
      rule: 1,
      list: ['artisan tools', 'musical instruments'],
    }],
    features: ['features go here'],
  },
  paladin: {
    die: 10,
    saves: ['wis', 'cha'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
    }],
    features: ['features go here'],
  },
  ranger: {
    die: 10,
    saves: ['str', 'dex'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['animal handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
    }],
    features: ['features go here'],
  },
  rogue: {
    die: 8,
    saves: ['dex', 'cha'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight of hand', 'stealth'],
    }],
    features: ['features go here'],
  },
  sorceror: {
    die: 6,
    saves: ['con', 'cha'],
    spells: [],
    styles: [{
      type: 'Sorceror Bloodline',
      rule: 1,
      list: ['draconic bloodline'],
    }],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
    }],
    features: ['features go here'],
  },
  warlock: {
    die: 8,
    saves: ['wis', 'cha'],
    spells: [],
    styles: [{
      type: 'Other Worldly Patron',
      rule: 1,
      list: ['The Fiend'],
    }],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['arcana', 'deception', 'history', 'insight', 'investigation', 'nature', 'religion'],
    }],
    features: ['features go here'],
  },
  wizard: {
    die: 8,
    saves: ['int', 'wis'],
    spells: [],
    styles: [],
    proficiencies: [{
      type: 'Skill Proficiency',
      rule: 2,
      list: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
    }],
    features: ['features go here'],
  },
};

export default classList;
