let vasya = {
  name: 'Вася',
  age: 25
};
let petya = {
  name: 'Петя',
  age: 30
};
let masha = {
  name: 'Маша',
  age: 29
};

let users = [vasya, petya, masha];
const isPetya = (user) => {
  if (user.name === 'Петя') {
    return true;
  } else {
    return false;
  }
};
const user = users.find((user) => isPetya(user));

console.log(user);
let result = find(users,(elem, index, arr)=>{
  console.log(elem, index, arr);
  return isPetya(elem)

})
console.log(result);
function find(arr, findCallBack){
  for (let i = 0; i< arr.length; i++){
    if (findCallBack(arr[i],i,arr)){
      return arr[i];
    }
  }
}


console.log(user);





