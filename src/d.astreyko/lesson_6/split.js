function split(str, symbol){
  let res = [];
  let temp = '';
  for(let i = 0; i !== str.length; i++){
    if(str[i] !== symbol){
      temp += str[i];
    }else {
      res.push(temp);
      temp = '';
    }
  }
  if(temp){
    res.push(temp);
  }
  return res;
}

console.log(split('asd tit jffj', ' '));
