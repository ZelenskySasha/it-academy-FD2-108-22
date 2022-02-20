function accum(s) {
    let elements = s.split('');
	let result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(elements[i].toUpperCase() + elements[i].toLowerCase().repeat(i))
    }
    return result.join("-");
}



console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));