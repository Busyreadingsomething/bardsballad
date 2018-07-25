const generateRandomItem = (id) => {
  const item = {};
  item.id = `item${id}`;
  item.dieType = 6;
  item.name = 'Dagger';
  item.dice = Math.floor(Math.random() * 3);
  item.description = 'This is test dagger.';
  item.proficient = true;
  item.bonus = Math.floor(Math.random() * 6);
};

const addItems = () => {
  const stop = Math.floor(Math.random() * 10 + 1);
  const list = [];

  for (let i = 0; i < stop; i += 1) {
    list.push(generateRandomItem(i));
  }

  return list;
};

const generateGear = () => {
  const gearItems = {
    weapons: [],
    armor: [],
    spells: [],
    gear: [],
  };

  Object.keys(gearItems).forEach((key) => {
    gearItems[key] = addItems();
  });

  return gearItems;
};

export default generateGear;
