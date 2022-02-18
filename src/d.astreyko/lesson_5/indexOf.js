function indexOf(arr, searchItem, from=0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === searchItem) {
      return i;
    }
  }
  return -1;


}
function lastIndexOf(arr, searchItem, from=arr.length-1){
  for (let i = from; i < arr.length; i--) {
    if (arr[i] === searchItem) {
      return i;
    }
  }
  return -1;}

console.log(indexOf([1, 2, 3, 4, 5, 2, 3, 1, 3], 3));
console.log(indexOf([1, 2, 3, 4, 5, 2, 3, 1, 3], 3,3));
console.log(lastIndexOf([1, 2, 3, 4, 5, 2, 3, 1, 3], 3,3));
console.log(lastIndexOf([1, 2, 3, 4, 5, 2, 3, 1, 3], 3));
