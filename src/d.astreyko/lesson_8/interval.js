function printNumbers(from, to) {
  let i = from;
  const intervalId = setInterval(() => {
    console.log(i);
    if(i === to) {
      clearInterval(intervalId)
    }
    i++;
  }, 200);
}

printNumbers(10, 20)
