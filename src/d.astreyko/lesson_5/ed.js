function addOne(string) {
  let numString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    if (!isNaN(Number(string[i]))) {
      numString += string[i];
    } else {
      break;
    }
  }
  if(numString === ""){
    return `${string}1`;
  }
  let reverseString = numString.split("").reverse().join("");

  let num = Number(reverseString)+1;

  return string.slice(0,-reverseString.length)+num;

}

console.log(addOne("asdfgh"));
