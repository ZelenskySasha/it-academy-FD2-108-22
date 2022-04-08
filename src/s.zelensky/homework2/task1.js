let date = new Date(2012, 0, 3);
console.log(dayName(date));

function dayName(date) {
    let n = date.getDay();
    if (n == 0) {
        return "вс";
    }
    if (n == 1) {
        return "пн";
    }
    if (n == 2) {
        return "вт";
    }
    if (n == 3) {
        return "ср";
    }
    if (n == 4) {
        return "чт";
    }
    if (n == 5) {
        return "пт";
    }
    if (n == 6) {
        return "сб";
    }
}