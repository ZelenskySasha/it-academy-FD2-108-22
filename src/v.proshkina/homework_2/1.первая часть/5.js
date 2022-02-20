function accum(string) {
  let count = 1;
  const array = string.toLowerCase().split("");
  console.log(array);
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].repeat(count));
    count++;
  }

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
  }
  return newArray.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
