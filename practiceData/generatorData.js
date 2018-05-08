const genData = () => {
  const data = {};
  const scores = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

  data.currentValue = null;
  data.currentIndex = null;
  data.roll = null;
  data.holder = {};

  scores.forEach((stat) => {
    data.holder[stat] = {
      val: 0,
      selected: false,
    };
  });
  data.rolls = [];

  return data;
};

export default genData;
