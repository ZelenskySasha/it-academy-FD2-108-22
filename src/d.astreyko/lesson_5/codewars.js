function count (string) {
  let arr = string.split('');
  let result = {};
  arr.forEach(item => {
    if (!result[item]) {
      result[item] = 1;
    }  else {
      result[item]++;
    }
  })

  return result;
}

count('abckggfa');
