function combineObjects(obj1, obj2, obj3) {
  for (const key in obj2) {
    if (key in obj1) {
      obj1[key] += obj2[key];
    } else {
      obj1[key] = obj2[key];
    }
  }

  for (const key2 in obj3) {
    if (key2 in obj1) {
      obj1[key2] += obj3[key2];
    } else {
      obj1[key2] = obj3[key2];
    }
  }

  return obj1;
}

//два объекта
console.log(
  combineObjects(
    (objA = { a: 10, b: 20, c: 30 }),
    (objB = { a: 3, c: 6, d: 3 })
  )
);
console.log(
  combineObjects(
    (objA = { a: 10, b: 20, c: 30 }),
    (objC = { a: 5, d: 11, e: 8 })
  )
);

//три объекта
console.log(
  combineObjects(
    (objA = { a: 10, b: 20, c: 30 }),
    (objB = { a: 3, c: 6, d: 3 }),
    (objC = { a: 5, d: 11, e: 8 })
  )
);
console.log(
  combineObjects(
    (objA = { a: 10, b: 20, c: 30 }),
    (objC = { a: 5, d: 11, e: 8 }),
    (objD = { c: 3 })
  )
);

//с пустыми объектами
console.log(combineObjects((objA = {}), (objB = {}), (objC = {})));
console.log(
  combineObjects(
    (objA = { a: 10, b: 20, c: 30 }),
    (objC = { a: 5, d: 11, e: 8 }),
    (objD = {})
  )
);
