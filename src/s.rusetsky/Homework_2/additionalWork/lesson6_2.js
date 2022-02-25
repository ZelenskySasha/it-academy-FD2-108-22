function getMiddle(s) {
  halfString = s.length / 2;
  halfString = Math.round(halfString);
  console.log(halfString);
  let str1 = '';

  if (s.length % 2 === 1) {
    str1 = s.slice(halfString - 1, halfString);
  } else {
    str1 = s.slice(halfString - 1, halfString + 1);
  }

  return str1;
}

console.log(getMiddle('abcbcba'));
