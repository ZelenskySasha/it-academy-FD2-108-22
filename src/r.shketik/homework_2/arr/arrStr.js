function arrStr(str) {
  let arr = [];

  let newStr = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] != ' ' && i < str.length) {
      newStr += str[i];
    }
    else {
      arr.push(newStr);
      newStr = "";
    }
  };

  for (let i = 0; i < arr.length; i++) {
    return arr;
  }
}



// console.log(arrStr("Robin singh"));
// console.log(arrStr("I love arrays they are my favorite"));
