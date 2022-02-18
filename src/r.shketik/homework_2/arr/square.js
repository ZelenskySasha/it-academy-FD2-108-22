function squareNum(arr) {
  let result = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newNum = Math.pow(arr[i], 2);
    newArr.push(newNum);
  }

  for (i = 0; i < newArr.length; i++) {
    result += newArr[i]
  }

  return result;
}
// squareNum([1, 2, 2]);

