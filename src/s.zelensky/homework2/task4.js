function IsItAnIsogram(string) {
    str = string;
    for (let firstletter = 0; firstletter < str.length; firstletter++) {
        for (let i = firstletter; i < str.length; i++) {
            if ((str[firstletter] == str[i + 1])) {
                return false;
            }
            if ((str[firstletter].toUpperCase() == str[i + 1]) || (str[firstletter].toLowerCase() == str[i + 1])) {
                return false;
            }
        }
    }
    return true;
}
console.log(IsItAnIsogram("Dermatoglyphics"));
console.log(IsItAnIsogram("aba"));
console.log(IsItAnIsogram("moOse"));