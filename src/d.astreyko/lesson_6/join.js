function join(array, string) {
  let result = '';
  for (let i=0; i < array.length; i++) {
    result+=array[i]+string;
  }
  return result.slice(0, -string.length);
}

let arr = [1,2,3,4,5];
console.log(arr.join('--'));
console.log(join(arr, '---'));
