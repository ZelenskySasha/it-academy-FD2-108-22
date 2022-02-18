const names = ['Бахрам', 'Бенджамин', 'Богдан', 'Борис',
  'Борислав', 'Бронислав', 'Булат', 'Булаг'];

function randomName() {
  return names[getRandomNum(0, names.length)];
}

function randomDay() {
  const day = ('' + getRandomNum(0, 31)).padStart(2, '0');
  const month = ('' + getRandomNum(0, 13)).padStart(2, '0');
  const year = 1970 + getRandomNum(0, 30);
  return `${day}.${month}.${year}`;
}

function randomUser() {
  return {
    name: randomName(),
    birthday: randomDay(),
  };
}

function getRandomNum(min, max) {
  const count = max - min;
  return Math.floor(Math.random() * count) + min;
}

const users = [];
for (let i = 0; i < 50; i++) {
  users.push(randomUser());
}

console.log(users);
