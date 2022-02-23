 function count(string) {

    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    for (let i = 0; i < string.length; i++) {
      if (vowelsArr.includes(string[i])) {
        result++;
      }
    }
    return result;
  }
  
  console.log(count("Ruslaaan"));


  



