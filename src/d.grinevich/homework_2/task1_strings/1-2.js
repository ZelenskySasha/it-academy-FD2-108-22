function repeatStr (n, s) {
    let string = "";
    for(i = 0; i<n;i++){
        string += s
    }
    return string
  }
  console.log(repeatStr(2, "I") );