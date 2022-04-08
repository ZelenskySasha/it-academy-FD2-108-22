let date = new Date('December 25, 1995 23:15:30');

function cheackDate(date) {
    const today = new Date();
    console.log(date);
    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDay());

    if (date == Date.now()) {
        return true;
    } else { return false; }
}
console.log(cheackDate(date));