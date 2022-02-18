function map(array, transformFunction)
{
  let result = [];
  array.forEach((element, index) =>
  {
    result.push(transformFunction(element, index, array));
  })
  return result;
}

let mappedResult = map([1, 2, 3, 4], x => x * 2);
console.log(mappedResult);




