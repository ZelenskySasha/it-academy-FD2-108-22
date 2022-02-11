function max(array) {
  let maxNum = array[0];
  for(let num of array) {
    if(maxNum < num) {
      maxNum = num
    }
  }
  return maxNum;
}

console.log(max([1, 6, 2, 3, 4, 9, 8]));
