function MinMax(str) {
    str = " " + str;
    min = parseInt(str);
    max = min;
    for (i = 0; i < str.length; i++) {
        if (str[i - 1] == " ") {
            if (min > parseInt(str.substr(i, str.length))) min = parseInt(str.substr(i, str.length));
            if (max < parseInt(str.substr(i, str.length))) max = parseInt(str.substr(i, str.length));
        }
    }
    return min + ", " + max;

}
console.log(MinMax("1 2 3 -2 44"));
console.log(MinMax("-5 -4 -3 -2 -1"));