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

  return data;
};

export default genData;
