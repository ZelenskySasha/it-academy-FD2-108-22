

function isIsogram(str){
    strUP = str.toUpperCase()
    for(i = 0; i<strUP.length; i++){
        for(k = 0; k<strUP.length; k++){
            if(i != k){
                if(strUP[i] == strUP[k]){
                    return false
                }
            }
        }
    }
    return true

  }

console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("Dermatoglyphics"));