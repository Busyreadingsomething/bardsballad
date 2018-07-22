import actions from '../client/actions';
import types from '../client/actionTypes';

describe('### ACTIONS ###', () => {
  describe('___UPDATE PROFILE___', () => {
    const mock = {
      target: {
        getAttribute() {
          return 'string-test';
        },
        value: 'STRING',
      },
    };

    const profile = actions.updateProfile(mock);

    it('Should create an object with the properties type, prop, and value with appropriate value types', () => {
      expect(profile).toBeInstanceOf(Object);
      expect(profile).toHaveProperty('type', types.UPDATE_PROFILE);
      expect(profile).toHaveProperty('prop');
      expect(profile).toHaveProperty('value');
    });

    it('Should have an array of strings for the prop value', () => {
      expect(profile.prop).toBeInstanceOf(Array);
      expect(profile.prop).toEqual(expect.arrayContaining(['string', 'test']));
    });

    it('Should have a string for the value property', () => {
      expect(typeof profile.value).toBe('string');
    });
  });

  describe('___UPDATE CLASS___', () => {
    const mock = {
      target: {
        value: 'barbarian',
      },
    };
    const charClass = actions.updateClass(mock);

    it('Should return an object with the props of type and className with appropriate value types', () => {
      expect(charClass).toBeInstanceOf(Object);
      expect(charClass).toHaveProperty('type', types.UPDATE_CLASS);
      expect(charClass).toHaveProperty('className');
    });

    it('Should have a string for the className property', () => {
      expect(typeof charClass.className).toBe('string');
    });
  });

  describe('___UPDATE RACE___', () => {
    const mock = {
      target: {
        value: 'elf',
      },
    };

    const race = actions.updateRace(mock);

    it('Should return an object with the props of type and race with appropriate value types', () => {
      expect(race).toBeInstanceOf(Object);
      expect(race).toHaveProperty('type', types.UPDATE_RACE);
      expect(race).toHaveProperty('race', 'elf');
    });

    it('Should have a string with the race property', () => {
      expect(typeof race.race).toBe('string');
    });
  });

  describe('___PICK ROLL___', () => {
    const mock = {
      target: {
        value: 'standard',
      },
    };

    const roll = actions.pickRoll(mock);

    it('Should return an object with the props of type and rollSelect with appropraite value types', () => {
      expect(roll).toBeInstanceOf(Object);
      expect(roll).toHaveProperty('type', types.PICK_ROLL);
      expect(roll).toHaveProperty('rollSelect', 'standard');
    });

    it('Should have a string for the rollSelect property', () => {
      expect(typeof roll.rollSelect).toBe('string');
    });
  });

  describe('___SET SCORE___', () => {
    const score = actions.setScore(12, 0);

    it('Should return an object with the props of type, val, and index with appropriate value types', () => {
      expect(score).toBeInstanceOf(Object);
      expect(score).toHaveProperty('type', types.SET_SCORE);
      expect(score).toHaveProperty('val', 12);
      expect(score).toHaveProperty('index', 0);
    });

    it('Should have a number for the val and index property', () => {
      expect(typeof score.val).toBe('number');
      expect(typeof score.index).toBe('number');
    });
  });

  describe('___UPDATE HOLDER___', () => {
    const holder = actions.updateHolder('stat');

    it('Should return an object with the props of type and stat with appropriate value types', () => {
      expect(holder).toBeInstanceOf(Object);
      expect(holder).toHaveProperty('type', types.UPDATE_HOLDER);
      expect(holder).toHaveProperty('stat', 'stat');
    });

    it('Should have a string for the stat property', () => {
      expect(typeof holder.stat).toBe('string');
    });
  });

  describe('___SET ABILITY___', () => {
    const ability = actions.setAbility();
    it('Should return an object with the props of type with appropriate value types', () => {
      expect(ability).toBeInstanceOf(Object);
      expect(ability).toHaveProperty('type', types.SET_ABILITY);
    });
  });

  describe('___UPDATE ATTR___', () => {
    const attr = actions.updateAttr(1, 'attribute', 'proficiency');

    it('Should return an object with the props of type, index, attr, and prof with appropriate value types', () => {
      expect(attr).toBeInstanceOf(Object);
      expect(attr).toHaveProperty('type', types.UPDATE_ATTR);
      expect(attr).toHaveProperty('index', 1);
      expect(attr).toHaveProperty('attr', 'attribute');
      expect(attr).toHaveProperty('prof', 'proficiency');
    });

    it('Should have a number for index, and string for attr and prof', () => {
      expect(typeof attr.index).toBe('number');
      expect(typeof attr.attr).toBe('string');
      expect(typeof attr.prof).toBe('string');
    });
  });

  describe('___MAKE CHARACTER___', () => {
    const char = actions.makeCharacter();

    it('Should return an object with the props of type and appropriate value types', () => {
      expect(char).toBeInstanceOf(Object);
      expect(char).toHaveProperty('type', types.MAKE_CHARACTER);
    });
  });

  describe('___MOD PAGE___', () => {
    const mock = {
      target: {
        getAttribute() {
          return 'next';
        },
      },
    };

    const mod = actions.modPage(mock);

    it('Should return an object with the props of type and motion, with appropriate value types', () => {
      expect(mod).toBeInstanceOf(Object);
      expect(mod).toHaveProperty('type', types.MOD_PAGE);
      expect(mod).toHaveProperty('motion', 'next');
    });

    it('Should have a string for the motion property', () => {
      expect(typeof mod.motion).toBe('string');
    });
  });

  describe('___REROLL___', () => {
    const reroll = actions.reroll();

    it('Should return an object with the props of type with appropriate value types', () => {
      expect(reroll).toBeInstanceOf(Object);
      expect(reroll).toHaveProperty('type', types.REROLL);
    });
  });

  describe('___ROLLING___', () => {
    const rolling = actions.rolling('stat');

    it('Should return an object with the props of type with appropriate value types', () => {
      expect(rolling).toBeInstanceOf(Object);
      expect(rolling).toHaveProperty('type', types.ROLLING);
    });
  });
});
