function printNumbers(from, to) {
  console.log(from);
  if (from === to) {
    return;
  }
  setTimeout(() => printNumbers(from + 1, to), 200);
}

printNumbers(10, 20);
