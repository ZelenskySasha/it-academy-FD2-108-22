var flatten = function (array){
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(...array[i]);
  }
  return arr;
}