const generateRoll = () => {
  const rolls = [];

  for (let roll = 0; roll < 4; roll += 1) {
    const num = Math.floor(Math.random() * 7);
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

