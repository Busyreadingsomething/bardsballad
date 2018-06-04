const genRoll = () => {
  let final = 0;
  let smallest = 0;

  for (let i = 0; i < 4; i += 1) {
    const num = Math.ceil(Math.random() * 6);
    if (smallest === 0 || num < smallest) {
      smallest = num;
    }
    final += num;
  }

  return final - smallest;
};

const genRollList = () => {
  const rolls = [];

  while (rolls.length < 6) {
    const score = genRoll();
    rolls.push(score);
  }

  return rolls;
};

const genStandard = () => [15, 14, 13, 12, 10, 8];
