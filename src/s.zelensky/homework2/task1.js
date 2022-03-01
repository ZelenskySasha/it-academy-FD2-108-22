function textInversion(str) {
    result = "";
    for (i = 1; i <= str.length; i++) {
        result = result + str[str.length - i];
    }
    return result;
}
console.log(textInversion("world"));
tconsole.log(extInversion("word"));