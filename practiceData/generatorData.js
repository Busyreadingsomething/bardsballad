const genData = () => {
  const data = {};

  data.currentValue = null;
  data.currentIndex = null;
  data.roll = null;
  data.holder = {
    str: {
      val: 0,
      selected: false,
    },
    dex: {
      val: 0,
      selected: false,
    },
    con: {
      val: 0,
      selected: false,
    },
    wis: {
      val: 0,
      selected: false,
    },
    int: {
      val: 0,
      selected: false,
    },
    cha: {
      val: 0,
      selected: false,
    },
  };
  data.rolls = [];

  return data;
};

export default genData;
