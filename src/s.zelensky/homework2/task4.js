function IsItAnIsogram(str) {
    result = true;
    for (firstletter = 0; firstletter < str.length; firstletter++) {
        for (i = firstletter; i < str.length; i++) {
            if ((str[firstletter] == str[i + 1])) {
                result = false;
            }
            if ((str[firstletter].toUpperCase() == str[i + 1]) || (str[firstletter].toLowerCase() == str[i + 1])) {
                result = false;
            }
        }
    }
    return result;
}
console.log(IsItAnIsogram("Dermatoglyphics"));
console.log(IsItAnIsogram("aba"));
console.log(IsItAnIsogram("moOse"));