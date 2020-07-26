function enemySelect(currentScore) {
  let index;
  const enemyarr = ['clefero', 'aparapita', 'gurka', 'gangman', 'master'];
  if (currentScore <= 50 && currentScore >= 0) {
    index = 0;
  } else if (currentScore <= 200 && currentScore >= 50) {
    index = 2;
  } else {
    index = 4;
  }
  return enemyarr[index];
}

const scoreUpdate = (Score) => {
  if (Score <= 50 && Score >= 0) {
    return 35;
  } if (Score <= 200 && Score >= 50) {
    return 50;
  }
  return 100;
};

function powerAssign(el) {
  switch (el) {
    case 'clefero':
      return [80, 80];
    case 'aparapita':
      return [90, 90];
    case 'gurka':
      return [100, 110];
    case 'gangman':
      return [150, 120];
    case 'master':
      return [200, 150];
    default:
      return 50;
  }
}

export {
  enemySelect, scoreUpdate, powerAssign,
};
