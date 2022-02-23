const objectA =  { a: 10, b: 20, c: 30 }
const objectB = {  c: 6, d: 3, a: 10, n:11}

let newObj = {};

function object(objectA, objectB) {
  for (let key in objectA) {
    if (key in objectB) {
      newObj[key] = objectA[key] + objectB[key];  
    }else {
      newObj[key] = objectA[key]; 
    }
  }
  for(let key in objectB){
    if(key in objectA){
      false
    }else{
      newObj[key] = objectB[key];
    }
  }

  return  newObj;
}

console.log(object(objectA, objectB));
