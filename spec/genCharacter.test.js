import character from '../practiceData/genCharacter';

describe('### GENERATE CHARACTER ###', () => {
  describe('___GEN SAVES___', () => {
    it('Should return an object', () => {
      const saves = character.genSaves('str', 3);
      expect(saves).toBeInstanceOf(Object);
    });

    it('Should add the property saving and athletics for STR', () => {
      const saves = character.genSaves('str', 3);
      expect(saves).toHaveProperty('saving', 3);
      expect(saves).toHaveProperty('athletics', 3);
    });

    it('Should add the property saving, acrobatics, slightOfHand, stealth for DEX', () => {
      const saves = character.genSaves('dex', 3);
      expect(saves).toHaveProperty('saving', 3);
      expect(saves).toHaveProperty('acrobatics', 3);
      expect(saves).toHaveProperty('slightOfHand', 3);
      expect(saves).toHaveProperty('stealth', 3);
    });

    it('Should add the property saving for CON', () => {
      const saves = character.genSaves('con', 3);
      expect(saves).toHaveProperty('saving', 3);
    });

    it('Should add the property saving, arcana, history, investigation, nature, religion for INT', () => {
      const saves = character.genSaves('int', 3);
      expect(saves).toHaveProperty('saving', 3);
      expect(saves).toHaveProperty('arcana', 3);
      expect(saves).toHaveProperty('history', 3);
      expect(saves).toHaveProperty('investigation', 3);
      expect(saves).toHaveProperty('nature', 3);
      expect(saves).toHaveProperty('religion', 3);
    });

    it('Should add the property saving, animalHandling, insight, medicine, perception, survival for WIS', () => {
      const saves = character.genSaves('wis', 3);
      expect(saves).toHaveProperty('saving', 3);
      expect(saves).toHaveProperty('animalHandling', 3);
      expect(saves).toHaveProperty('insight', 3);
      expect(saves).toHaveProperty('medicine', 3);
      expect(saves).toHaveProperty('perception', 3);
      expect(saves).toHaveProperty('survival', 3);
    });

    it('Should add the property saving, deception, intimidation, performance, persuasion for CHA', () => {
      const saves = character.genSaves('cha', 3);
      expect(saves).toHaveProperty('saving', 3);
      expect(saves).toHaveProperty('deception', 3);
      expect(saves).toHaveProperty('intimidation', 3);
      expect(saves).toHaveProperty('performance', 3);
      expect(saves).toHaveProperty('persuasion', 3);
    });
  });

  describe('___GEN ABILITY___', () => {
    it('Should return an object', () => {
      const scores = character.genAbility();
      expect(scores).toBeInstanceOf(Object);
    });

    it('Should have the property str, dex, con, int, wis, and cha', () => {
      const scores = character.genAbility();
      expect(scores).toHaveProperty('str');
      expect(scores).toHaveProperty('dex');
      expect(scores).toHaveProperty('con');
      expect(scores).toHaveProperty('int');
      expect(scores).toHaveProperty('wis');
      expect(scores).toHaveProperty('cha');
    });

    it('Stat should have value, mode and saves property', () => {
      const { str } = character.genAbility();
      expect(str).toHaveProperty('value');
      expect(str).toHaveProperty('mod');
      expect(str).toHaveProperty('saves');
    });

    it('Should populate the value with 0 if no object is passed through', () => {
      const { str } = character.genAbility();
      expect(str.value).toBe(0);
      expect(str.mod).toBe(-5);
    });

    it('Should populate the value with the appropriate value from the object passed in', () => {
      const scores = character.genAbility({
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      });
      Object.keys(scores).forEach((stat) => {
        const score = scores[stat];
        expect(score.value).toBe(10);
        expect(score.mod).toBe(0);
      });
    });
  });

  describe('___GEN PROFILE___', () => {
    const profile = character.genProfile('bort', 'male', 'chaotic good');

    it('Should return an object', () => {
      expect(profile).toBeInstanceOf(Object);
    });

    it('Should have the proeprties name, gender, and align', () => {
      expect(profile).toHaveProperty('name', 'bort');
      expect(profile).toHaveProperty('gender', 'male');
      expect(profile).toHaveProperty('align', 'chaotic good');
    });
  });

  describe('___GEN RACE___', () => {
    it('Should return an object', () => {
      const race = character.genRace();
      expect(race).toBeInstanceOf(Object);
    });

    it('Should have the properties name, modifiers, attributes', () => {
      const race = character.genRace();
      expect(race).toHaveProperty('name');
      expect(race).toHaveProperty('modifiers');
      expect(race).toHaveProperty('attributes');
    });

    it('Should have an empty string or null if nothing is passed in', () => {
      const race = character.genRace();
      expect(race).toHaveProperty('name', '');
      expect(race).toHaveProperty('modifiers', null);
      expect(race).toHaveProperty('attributes', null);
    });

    it('Should set the value according to the race', () => {
      const race = character.genRace('elf');
      expect(race.name).toBe('elf');
      expect(race.modifiers).toBeInstanceOf(Object);
      expect(race.modifiers).toHaveProperty('dex', 2);
      expect(Array.isArray(race.attributes)).toBe(true);
    });
  });

  describe('___GEN CLASS___', () => {
    it('Should retun an object', () => {
      const charClass = character.genClass();
      expect(charClass).toBeInstanceOf(Object);
    });

    it('Should have properties name, hitdie, proficiencies, and features', () => {
      const charClass = character.genClass();
      expect(charClass).toHaveProperty('name');
      expect(charClass).toHaveProperty('hitDie');
      expect(charClass).toHaveProperty('proficiencies');
      expect(charClass).toHaveProperty('features');
    });

    it('Should return value with an empty string and null if nothing is passed in', () => {
      const charClass = character.genClass();
      expect(charClass).toHaveProperty('name', '');
      expect(charClass).toHaveProperty('hitDie', null);
      expect(charClass).toHaveProperty('proficiencies', null);
      expect(charClass).toHaveProperty('features', null);
    });

    it('Should set values based on the class name passed in ', () => {
      const charClass = character.genClass('barbarian');
      expect(charClass).toHaveProperty('name', 'barbarian');
      expect(charClass).toHaveProperty('hitDie', 12);
      expect(Array.isArray(charClass.proficiencies)).toBe(true);
      expect(Array.isArray(charClass.features)).toBe(true);
    });
  });

  describe('___GEN STATUS___', () => {
    const status = character.genStatus();
    it('Should return an object', () => {
      expect(status).toBeInstanceOf(Object);
    });

    it('Should have the properties level, maxHP, currentHP, tempHP, armorClass, speed, init, and saves', () => {
      expect(status).toHaveProperty('level', 0);
      expect(status).toHaveProperty('maxHP', null);
      expect(status).toHaveProperty('currentHP', null);
      expect(status).toHaveProperty('tempHP', null);
      expect(status).toHaveProperty('armorClass', null);
      expect(status).toHaveProperty('speed', null);
      expect(status).toHaveProperty('init', null);
      expect(status).toHaveProperty('saves');
    });

    it('Saves should have the properties of success and failure', () => {
      const { saves } = status;
      expect(saves).toHaveProperty('success');
      expect(saves).toHaveProperty('failures');
      expect(Array.isArray(saves.success)).toBe(true);
      expect(Array.isArray(saves.failures)).toBe(true);
      expect(saves.success).toHaveLength(3);
      expect(saves.failures).toHaveLength(3);
    });
  });

  describe('___GEN GEAR___', () => {
    it('Should return an object', () => {
      const gear = character.genGear();
      expect(gear).toBeInstanceOf(Object);
    });

    it('Should have properties: weapons, spells, money', () => {
      const gear = character.genGear();
      const { weapons, spells, money } = gear;
      expect(gear).toHaveProperty('weapons');
      expect(Array.isArray(weapons)).toBe(true);
      expect(gear).toHaveProperty('spells');
      expect(Array.isArray(spells)).toBe(true);
      expect(gear).toHaveProperty('money');
      expect(money).toBeInstanceOf(Object);
    });

    it('Should have the default value set to 0 for each currency if nothing is passed in', () => {
      const { money } = character.genGear();
      expect(money).toHaveProperty('cp', 0);
      expect(money).toHaveProperty('sp', 0);
      expect(money).toHaveProperty('gp', 0);
      expect(money).toHaveProperty('pp', 0);
    });

    it('Should set the money if a money object is passed in', () => {
      const { money } = character.genGear('', '', {
        cp: 10,
        sp: 40,
        gp: 2,
        pp: 4,
      });

      expect(money).toHaveProperty('cp', 10);
      expect(money).toHaveProperty('sp', 40);
      expect(money).toHaveProperty('gp', 2);
      expect(money).toHaveProperty('pp', 4);
    });
  });

  describe('___GEN CHARACTER___', () => {
    it('Should return an Object', () => {
      const char = character.genCharacter();
      expect(char).toBeInstanceOf(Object);
    });

    it('Should have the properties: ability, profile, race, charClass, status, gear, equipped', () => {
      const char = character.genCharacter();
      const {
        ability,
        profile,
        race,
        charClass,
        status,
        gear,
        equipped,
      } = char;

      expect(char).toHaveProperty('ability');
      expect(ability).toBeInstanceOf(Object);
      expect(char).toHaveProperty('profile');
      expect(profile).toBeInstanceOf(Object);
      expect(char).toHaveProperty('race');
      expect(race).toBeInstanceOf(Object);
      expect(char).toHaveProperty('charClass');
      expect(charClass).toBeInstanceOf(Object);
      expect(char).toHaveProperty('status');
      expect(status).toBeInstanceOf(Object);
      expect(char).toHaveProperty('gear');
      expect(gear).toBeInstanceOf(Object);
      expect(char).toHaveProperty('equipped');
      expect(equipped).toBeInstanceOf(Object);
    });

    it('Should have weapons, spells, and armor properties in the equipped property', () => {
      const char = character.genCharacter();
      const { equipped } = char;
      const { weapons, spells, armor } = equipped;
      expect(equipped).toHaveProperty('weapons');
      expect(Array.isArray(weapons)).toBe(true);
      expect(equipped).toHaveProperty('spells');
      expect(Array.isArray(spells)).toBe(true);
      expect(equipped).toHaveProperty('armor');
      expect(Array.isArray(armor)).toBe(true);
    });
  });
});
