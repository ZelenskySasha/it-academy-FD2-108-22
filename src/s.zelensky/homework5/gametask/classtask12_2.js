let money = 1000;
let neededmoney = 1000;
let percent = 1;
count(money, neededmoney, percent);

function count(money, neededmoney, percent) {
    let countday = 0;
    let perday = money / (365 / (percent / 100));
    //console.log(perday);
    for (let i = 1; neededmoney + perday > (perday * i); i++) {
        //console.log(perday * i);
        countday = i;
    }
    //console.log(countday);
    dateCompare(countday);

}

function dateCompare(countday) {
    let datenow = Date.now();
    let resuilt = new Date(countday * 1000 * 60 * 60 * 24 + datenow);
    console.log(resuilt);
    // console.log(datenow);

}