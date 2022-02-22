let countCalls = 0;
for (let i = 0; i < 50; i++) {
  console.time('calculation');
  countCalls = 0;
  console.log('index:' + i + ' value:', fibonachi2(i));
  console.log('calls:', countCalls);
  console.timeEnd('calculation');
}

function fibonachi(index) {
  countCalls++;
  if (index <= 1) {
    return index;
  }
  return fibonachi(index - 1) + fibonachi(index - 2);
}

function fibonachi2(index) {
  const array = [0, 1];
  for (let i = 2; i <= index; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  console.log(array);
  return array[index];
}
