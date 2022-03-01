function ConvertToArray(str) {
    var array = [];
    word = "";
    for (i = 0; i < str.length; i++) {
        if ((str[i] == " ") || (i == str.length - 1)) {
            array.push(word);
            word = "";
        }
        word = word + str[i];
    }
    return array;
}
console.log(ConvertToArray("Robin Singh"));
console.log(ConvertToArray("I love arrays they are my favorite"));