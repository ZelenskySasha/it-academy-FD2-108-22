function checkIsogram(string) {
  const array = string.toLowerCase().split("").sort();
  console.log(array);
  let currentLetter = array[0];
  for (let i = 1; i < array.length; i++) {
    if (currentLetter === array[i]) {
      return false;
    } else {
      currentLetter = array[i];
    }
  }
  return true;
}

console.log(checkIsogram("Dermatoglyphics"));
console.log(checkIsogram("aba"));
console.log(checkIsogram("moOse"));
