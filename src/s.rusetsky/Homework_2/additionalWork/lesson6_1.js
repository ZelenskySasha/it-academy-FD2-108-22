function getCount(str) {
  let vowelsCount = 0;
  let arr = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount('aaaaeidgt'));
