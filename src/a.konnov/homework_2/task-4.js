function isIsogramm(text){
    text = text.toLowerCase();
    let x;
    for (let i = 0; i < text.length; i++) {
        for (x = i + 1; x < text.length; x++) {
            if (text[i] === text[x]) {
                return false;
            }
        }

    }
    return true;
  }
console.log(isIsogramm("Dermatoglyphics"));
console.log(isIsogramm("aba"));
console.log(isIsogramm("moOse"));