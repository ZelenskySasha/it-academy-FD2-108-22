function accum(s) {
    let elements = s.split('');
	let result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(elements[i].toUpperCase() + elements[i].toLowerCase().repeat(i))
    }
    return result.join("-");
}



console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"