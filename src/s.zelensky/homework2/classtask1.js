function VowelsCount(str) {
    let result = 0;
    const newstr = str.toLowerCase();
    vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < newstr.length; i++) {
        for (let n = 0; n < newstr.length; n++) {
            if (newstr[i] == vowels[n]) {
                result++;
            }
        }
    }
    return result;
}
console.log(VowelsCount("Sasha Zelensky"));
console.log(VowelsCount("Anna"));
console.log(VowelsCount("Dima"));