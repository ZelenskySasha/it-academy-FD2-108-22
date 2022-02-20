//Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for(let i = 0; i !== str.length; i++){
    if(vowels.includes(str[i]))
      ++vowelsCount;
  }
  
  return vowelsCount;
}

//Get the Middle Character
function getMiddle(s){
  const slice = Math.round((s.length / 2) - 1);
  return (s.length === 1) ? s : (s.slice(slice,-slice));
}

//Combine objects
function combine(objA, objB) {  //for 2 object
  let res = Object.assign(objB);
  for(let symbol in objA){
    if(objB[symbol]){
      res[symbol] = objA[symbol] + objB[symbol];
    }else{
      res[symbol] = objA[symbol];
    }
  }
  for(let symbol in objB){
    if(!objA.hasOwnProperty(symbol)){
      res[symbol] = objB[symbol];
    }
  }
  return res;
}

const users = [
  { name: 'Бенджамин', age: 63 },
  { name: 'Бронислав', age: 67 },
  { name: 'Богдан', age: 41 },
  { name: 'Борис', age: 52 },
  { name: 'Бронислав', age: 40 },
  { name: 'Бенджамин', age: 55 },
  { name: 'Богдан', age: 22 },
  { name: 'Богдан', age: 61 },
  { name: 'Булаг', age: 64 },
  { name: 'Булаг', age: 66 },
  { name: 'Бенджамин', age: 48 },
  { name: 'Богдан', age: 20 },
  { name: 'Богдан', age: 20 },
  { name: 'Бенджамин', age: 50 },
  { name: 'Булат', age: 29 },
  { name: 'Булаг', age: 58 },
  { name: 'Бенджамин', age: 62 },
  { name: 'Бенджамин', age: 38 },
  { name: 'Булат', age: 37 },
  { name: 'Борис', age: 25 },
  { name: 'Богдан', age: 51 },
  { name: 'Бенджамин', age: 33 },
  { name: 'Булат', age: 40 },
  { name: 'Булаг', age: 37 },
  { name: 'Булаг', age: 58 },
  { name: 'Бронислав', age: 52 },
  { name: 'Булат', age: 48 },
  { name: 'Бенджамин', age: 60 },
  { name: 'Богдан', age: 27 },
  { name: 'Булаг', age: 45 },
  { name: 'Бахрам', age: 58 },
  { name: 'Бенджамин', age: 66 },
  { name: 'Бахрам', age: 32 },
  { name: 'Бахрам', age: 42 },
  { name: 'Бенджамин', age: 23 },
  { name: 'Борислав', age: 46 },
  { name: 'Бронислав', age: 20 },
  { name: 'Борис', age: 34 },
  { name: 'Богдан', age: 33 },
  { name: 'Борислав', age: 30 },
  { name: 'Богдан', age: 51 },
  { name: 'Булаг', age: 41 },
  { name: 'Борислав', age: 35 },
  { name: 'Борис', age: 60 },
  { name: 'Бенджамин', age: 64 },
  { name: 'Булаг', age: 63 },
  { name: 'Булат', age: 59 },
  { name: 'Булат', age: 20 },
  { name: 'Булаг', age: 60 },
  { name: 'Бенджамин', age: 47 }
];


//4
function sortByAge(){
  return users.sort((a,b)=>a.age - b.age);
} 

//5
function averageByAge(){
  return Math.round(users.reduce((accumulator, currentValue)=>accumulator + currentValue.age,0) / users.length);
}

//6
function older(){
  return Math.max(...users.map((item)=>item.age));
}

function younger(){
  return Math.min(...users.map((item)=>item.age));
}