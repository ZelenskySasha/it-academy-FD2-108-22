function filter(array, filterFunc) {
  let result = [];
  array.forEach((item, index) => {
    const needSaveItem = filterFunc(item, index, array);
    if (needSaveItem) {
      result.push(item);
    }
  });
  return result;
}

let filteredArray = filter([1, 2, 3, 6], (num, index) => {
  return index % 2 ===0;
});
console.log(filteredArray)

let temp = [1, 2, 3, 6];
console.log(temp.filter((item) => item > 3));
