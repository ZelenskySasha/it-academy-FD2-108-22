function getRandomNum(min, max) {
  const count = max - min;
  return Math.floor(Math.random() * count) + min;
}

const result = {};

for (let i = 0; i < 100; i++) {
  const randomNum = getRandomNum(10, 15);
  if (randomNum in result) {
    result[randomNum]++;
  } else {
    result[randomNum] = 1;
  }
}

console.log(result);
