class Weapon {
  constructor(name, type, damage, dice, enchantments, description) {
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.dice = dice;
    this.enchantments = enchantments;
    this.description = description;
  }
}

class Spell {
  constructor(name, level, time, duration, range, save, effect, damage, description) {
    this.name = name;
    this.level = level;
    this.time = time;
    this.duration = duration;
    this.range = range;
    this.save = save;
    this.effect = effect;
    this.damage = damage;
    this.description = description;
  }
}

class Attributes {
  constructor(str, dex, con, int, wis, cha) {
    this.ability = {
      STR: {
        value: str,
        mod: Math.floor((str - 10) / 2),
        throws: {
          saving: Math.floor((str - 10) / 2),
          atheltics: Math.floor((str - 10) / 2),
        },
      },
      DEX: {
        value: dex,
        mod: Math.floor((dex - 10) / 2),
        throws: {
          saving: Math.floor((dex - 10) / 2),
          acrobatics: Math.floor((dex - 10) / 2),
          slightOfHand: Math.floor((dex - 10) / 2),
          stealth: Math.floor((dex - 10) / 2),
        },
      },
      CON: {
        value: con,
        mod: Math.floor((con - 10) / 2),
        throws: {
          saving: Math.floor((con - 10) / 2),
        },
      },
      INT: {
        value: int,
        mod: Math.floor((int - 10) / 2),
        throws: {
          saving: Math.floor((int - 10) / 2),
          arcana: Math.floor((int - 10) / 2),
          history: Math.floor((int - 10) / 2),
          investigation: Math.floor((int - 10) / 2),
          nature: Math.floor((int - 10) / 2),
          religion: Math.floor((int - 10) / 2),
        },
      },
      WIS: {
        value: wis,
        mod: Math.floor((wis - 10) / 2),
        throws: {
          saving: Math.floor((wis - 10) / 2),
          animalHandling: Math.floor((wis - 10) / 2),
          insight: Math.floor((wis - 10) / 2),
          medicine: Math.floor((wis - 10) / 2),
          perception: Math.floor((wis - 10) / 2),
          survival: Math.floor((wis - 10) / 2),
        },
      },
      CHA: {
        value: cha,
        mod: Math.floor((cha - 10) / 2),
        throws: {
          saving: Math.floor((cha - 10) / 2),
          deception: Math.floor((cha - 10) / 2),
          intimidation: Math.floor((cha - 10) / 2),
          performance: Math.floor((cha - 10) / 2),
          persuasion: Math.floor((cha - 10) / 2),
        },
      },
    };
  }
}

class Profile extends Attributes {
  constructor(name, gender, align, ability) {
    super(...ability);
    this.profile = {
      name,
      gender,
      align,
    };
  }
}

class Race extends Profile {
  constructor(name, gender, race, align, ability) {
    super(name, gender, align, ability);
    this.playerRace = {
      race,
      modifiers: null,
      attributes: null,
    };
  }
}

class PlayerClass extends Race {
  constructor(name, gender, race, align, charClass, ability) {
    super(name, gender, race, align, ability);
    this.playerClass = {
      charClass,
      hitDie: null,
      feats: null,
    };
  }
}

class Character extends PlayerClass {
  constructor(name, gender, race, align, charClass, ability) {
    super(name, gender, race, align, charClass, ability);
    this.status = {
      level: 0,
      maxHP: null,
      currentHP: null,
      tempHP: null,
      armorClass: null,
      speed: null,
      init: null,
      saves: {
        success: [null, null, null],
        failuers: [null, null, null],
      },
    };
    this.equipped = {
      weapons: [],
      spells: [],
      armor: [],
    };
    this.gear = {
      weapons: [],
      spells: [],
      money: {
        cp: 0,
        sp: 0,
        gp: 20,
        pp: 0,
      },
    };
  }
}

export default Character;
