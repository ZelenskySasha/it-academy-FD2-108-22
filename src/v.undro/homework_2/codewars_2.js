function isPalindrome(line) {
  typeof line == "number" ? line = line.toString() : line = line;
  let reversedLine = line.split("").reverse().join("");
  return line == reversedLine;
}

isPalindrome(889);
