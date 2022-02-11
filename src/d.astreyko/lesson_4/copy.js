const obj = { num: 3 };
const obj1 = { num: 3 };

obj1 === obj; //false


const obj2 = obj;
obj === obj2; //true




obj2.num = 4;
console.log('obj2', obj2);
console.log('obj', obj);

changeValue(obj);
function changeValue(obj) {
  obj.newField = 2;
}

console.log('obj2', obj2);
console.log('obj', obj);


const num = 2;
console.log(num);
changeValue2(num);
console.log(num);

function changeValue2(num) {
  num = 3;
  console.log(num);
}



const num1 = 2;
const num2 = 2;

num2 === num1
