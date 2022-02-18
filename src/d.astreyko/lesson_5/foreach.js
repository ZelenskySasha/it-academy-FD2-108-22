const arr = ['b', 'c', 'd'];

arr.forEach(function (item, index, array) {
  console.log(item);
});

let newA = arr.forEach((item) => console.log(item));
console.log(newA);

newA = arr.map((item, index, array) => {
  return item.repeat(2)
});

console.log(newA);
