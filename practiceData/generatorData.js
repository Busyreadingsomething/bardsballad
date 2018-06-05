const genData = () => {
  const data = {};

  data.stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  data.currentValue = null;
  data.currentIndex = null;
  data.rollSelect = null;

  data.holder = {};

  data.stats.forEach((stat) => {
    data.holder[stat] = {
      val: 0,
      selected: false,
    };
  });
  data.rolls = [];
  data.rollKeys = ['roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6'];
  data.classProficiencies = [];
  data.raceProficiencies = [];

  return data;
};

export default genData;
