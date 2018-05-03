const genRoll = () => {
  const rolls = [];

  while (rolls.length < 4) {
    const num = Math.ceil(Math.random() * 6);
    if (!rolls.length) {
      rolls.push(num);
    } else if (rolls[0] < num) {
      rolls.push(num);
    } else if (rolls[0] > num) {
      rolls.unshift(num);
    } else {
      rolls.push(num);
    }
  }

  return rolls.reduce((acc, num, index) => {
    let added = acc;
    if (index) {
      added += num;
    }
    return added;
  }, 0);
};

const genRollList = () => {
  const rolls = [];

  while (rolls.length < 6) {
    const score = genRoll();
    rolls.push(score);
  }

  return rolls;
};

export default {
  genRoll,
  genRollList,
};
