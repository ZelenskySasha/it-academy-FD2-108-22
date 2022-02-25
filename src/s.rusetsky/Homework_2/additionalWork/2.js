function upArray(arr) {
  const array = [];
  if (arr.length === 0){
    return null;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
    } else {
      arr[i]++;
      break;
    }
    if (arr[0] === 0) {
      arr.unshift(1);
    }
  }
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > 9 || arr[i] === undefined || arr[i] < 0) {
    return null;
    }
  }
  return arr;
}