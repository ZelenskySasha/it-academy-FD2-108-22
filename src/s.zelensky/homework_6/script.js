let arrMonth = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December',
];
let countmonth = 0;
let arrDate = [];
let textform = "";
let dateform = "";
let year = "";
let month = "";
let day = "";
let TodayDay = "";
let TodayPaint = true;
const url = 'https://www.metaweather.com/api/location/834463/';
let arrwether = [];

function CreateAll(n) {
    if (n == "FindToday") {
        localStorage.setItem('day', JSON.stringify(0));
    }
    if (isNaN(n)) {
        n = 0;
        countmonth = 0;
        if (localStorage.getItem('day')) {
            countmonth = JSON.parse(localStorage.getItem('day'));
        }
    } else {
        countmonth = countmonth + n;
        localStorage.setItem('day', JSON.stringify(countmonth));
    }
    let today = new Date();
    let firstDate = new Date();
    let seconfDate = new Date();
    let startDate = new Date();
    firstDate.setMonth(firstDate.getMonth() + countmonth);
    seconfDate.setMonth(seconfDate.getMonth() + countmonth);
    startDate.setMonth(startDate.getMonth() + countmonth);
    TodayPaint = false;
    if (today.getMonth() == firstDate.getMonth() && today.getFullYear() == firstDate.getFullYear()) {
        today = today.getDate();
        TodayDay = today;
        TodayPaint = true
    }
    year = firstDate.getFullYear();
    month = arrMonth[firstDate.getMonth()];
    document.getElementById('year').textContent = year;
    document.getElementById('month').textContent = month;
    startDate.setDate(1);
    let startday = startDate.getDay();
    seconfDate.setMonth(seconfDate.getMonth() + 1);
    let amountofday = (seconfDate - firstDate) / 1000 / 3600 / 24;
    let arrDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (document.getElementById('table')) { document.getElementById('table').remove(); }
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let calendarDiv = document.getElementById('calendar');
    table.setAttribute('id', 'table');
    calendarDiv.append(table);
    table.className = "calendar";
    wether();
    table.addEventListener('click', SelectData);
    table.append(thead);
    table.append(tbody);
    for (let n = 0; n < 7; n++) {
        if (amountofday < 1) { break; }
        let tr = document.createElement('tr');
        if (n == 0) { thead.append(tr); } else { tbody.append(tr); }
        for (let i = 0; i < 7; i++) {
            let td = document.createElement('td');
            if (n == 0) { td.textContent = arrDayName[i]; } else {
                if ((i + 7 * n - 6) > startday) {
                    amountofday--;
                    if (amountofday > -1) {
                        td.textContent = i + 7 * n - 6 - startday;
                        td.setAttribute('id', i + 7 * n - 6 - startday);
                        if (i % 7 == 6 || i % 7 == 0) { td.style.backgroundColor = "rgb(240, 161, 161)"; }
                        if (Number.isInteger(today) && (today == i + 7 * n - 6 - startday)) {
                            td.textContent = td.textContent + " Today";
                            td.style.border = "1px solid rgb(134, 200, 33)";
                        }
                    }
                }
            }
            tr.append(td);
        }
    }
    CellRenderNotes();
}

if (localStorage.getItem('arr')) {
    arrDate = JSON.parse(localStorage.getItem('arr'));
    sorfArrayByTime();
}

function SelectData(event) {
    let thiscell = event.target;
    if (thiscell.className == 'CellNotes') {
        thiscell = event.target.parentElement;
    }
    if ((thiscell.id > 0 && thiscell.id < 32) ||
        thiscell.textContent.includes('Today')) {
        day = thiscell.id;
        alert
        if (document.getElementById('toDoList')) {
            document.getElementById('toDoList').remove();
        }
        if (day < 10) { day = "0" + day }
        createAll(day);
    }
}

function createAll(day) {
    if (!document.getElementById('toDoList')) {
        let toDoList = document.createElement('div');
        toDoList.setAttribute('id', 'toDoList')
        toDoList.className = "toDoList";
        document.getElementById('main').append(toDoList);
        let datediv = document.createElement('div');
        datediv.textContent = year + " " + month + " " + day;
        toDoList.className = "toDoListDate";
        toDoList.append(datediv);
    }
    if (!document.getElementById('notesContainer')) {
        let notesContainer = document.createElement('div');
        notesContainer.setAttribute('id', 'notesContainer')
        document.getElementById('toDoList').append(notesContainer);
    }
    if (!document.getElementById('createNotes') && !document.getElementById('creationNotes')) {
        let createNotes = document.createElement('div');
        createNotes.setAttribute('id', 'createNotes')
        createNotes.className = "createNotes";
        createNotes.textContent = "Create notes";
        toDoList.append(createNotes);
        Rendaringpart();
        createNotes.addEventListener('click', createNewNode);
    }
}

function createNewNode() {
    let changes = true;
    if (document.getElementById('createNotes')) {
        document.getElementById('createNotes').remove();
        let creationNotes = document.createElement('div');
        creationNotes.setAttribute('id', 'creationNotes');
        creationNotes.className = "createNotes";
        toDoList.append(creationNotes);
        let submitButton = document.createElement('button');
        creationNotes.append(submitButton);
        submitButton.setAttribute('id', 'submitButton');
        submitButton.textContent = "Submit";
        let textform = document.createElement('input');
        textform.value = "Some text";
        textform.style.color = "grey";
        textform.addEventListener('click', (event) => {
            if (changes) {
                event.target.value = "";
            }
            changes = false;
            textform.style.color = "black";
        })
        textform.setAttribute('id', 'textform');
        creationNotes.append(textform);
        let dateform = document.createElement('input');
        dateform.setAttribute('type', 'time');
        dateform.setAttribute('id', 'dateform');
        dateform.value = "12:00";
        creationNotes.append(dateform);
        submitButton.addEventListener('click', NewNode);
    }
}

function NewNode() {
    textform = document.getElementById('textform').value;
    dateform = document.getElementById('dateform').value;
    document.getElementById('creationNotes').remove();
    let createdNotes = {
        textvalue: textform,
        dateinside: dateform,
        year: year,
        month: month,
        day: day,
        id: new Date().getTime(),
    };
    arrDate.push(createdNotes);
    localStorage.setItem('arr', JSON.stringify(arrDate));
    RenderNotes();
}

function RenderNotes() {
    if (document.getElementById('notesContainer')) {
        document.getElementById('notesContainer').remove();
        let notesContainer = document.createElement('div');
        notesContainer.setAttribute('id', 'notesContainer')
        document.getElementById('toDoList').append(notesContainer);
    }
    createAll();
}

function Rendaringpart() {
    CellRenderNotes();
    sorfArrayByTime();
    for (let i = 0; i < arrDate.length; i++) {
        if (arrDate[i].day == day && arrDate[i].year == year && arrDate[i].month == month) {
            let notesContainer = document.getElementById('notesContainer');
            let notes = document.createElement('div');
            let notestext = document.createElement('div');
            let notesLeftPart = document.createElement('div');
            let remove_notes = document.createElement('div');
            notestext.className = "notestext";
            notesLeftPart.className = "notesLeftPart";
            notesLeftPart.textContent = arrDate[i].dateinside;
            notes.className = "notes";
            remove_notes.className = "remove_notes";
            remove_notes.textContent = "x";
            remove_notes.setAttribute('id', arrDate[i].id)
            remove_notes.addEventListener('click', (event) => {
                let id = event.target.id;
                for (let n = 0; n < arrDate.length; n++) {
                    if (arrDate[n].id == id) {
                        arrDate.splice(n, 1);
                        localStorage.setItem('arr', JSON.stringify(arrDate));
                    }
                }
                notes.remove();
                CellRenderNotes();
            });
            notestext.textContent = arrDate[i].textvalue;
            notesContainer.append(notes);
            notes.append(notesLeftPart);
            notes.append(notestext);
            notes.append(remove_notes);
            notesLeftPart.style.height = notes.clientHeight - 24 + 'px';
        }
    }
}

function ClearNotes() {
    localStorage.clear();
    arrDate = [];
    if (document.getElementById('notesContainer')) {
        document.getElementById('notesContainer').remove();
    }
    CellRenderNotes();
}

function CellRenderNotes() {
    sorfArrayByTime();
    let n = 0;
    let somedate = new Date();
    for (let i = 0; i < 32; i++) {
        if (document.getElementById(i)) {
            document.getElementById(i).textContent = i;
            if (i == TodayDay && TodayPaint) {
                document.getElementById(i).textContent = i + " Today";
            }
            document.getElementById(i).setAttribute('notesinside', '0');
        }
    }
    for (let i = 0; i < arrDate.length; i++) {
        if (arrDate[i].year == year && arrDate[i].month == month) {
            let cellfornotes = document.getElementById(arrDate[i].day);
            if (!cellfornotes) {
                cellfornotes = document.getElementById(arrDate[i].day.toString()[1]);
            }
            n = cellfornotes.getAttribute('notesinside');
            n++;
            cellfornotes.setAttribute('notesinside', n);
            let notesInCell = document.createElement('div');
            let textInsideNote = arrDate[i].textvalue;
            if (textInsideNote.length > 14) { textInsideNote = textInsideNote.slice(0, 14) + '..' }
            notesInCell.textContent = textInsideNote;
            notesInCell.classList = "CellNotes";
            if (n < 3) { cellfornotes.append(notesInCell); } else {
                cellfornotes.lastChild.textContent = n - 1 + " more";
            }
        }
    }
}

function sorfArrayByTime() {
    if (arrDate.length > 1) {
        let mintime = 0
        let stop = 0;
        while (stop != arrDate.length - 1) {
            stop = 0;
            for (let i = 0; i < arrDate.length - 1; i++) {
                if (arrDate[i].dateinside > arrDate[i + 1].dateinside) {
                    mintime = arrDate[i + 1];
                    arrDate[i + 1] = arrDate[i];
                    arrDate[i] = mintime;
                    console.log("aaaaa");
                } else { stop++; }
            }
        }
        localStorage.setItem('arr', JSON.stringify(arrDate));
    }
}

function wether() {
    if (!document.getElementById('wether')) {
        let today = new Date();
        let wetherconteiner = document.createElement('div');
        wetherconteiner.setAttribute('id', 'wether');
        wetherconteiner.style.width = document.getElementById('calendar').offsetWidth + 'px';
        document.body.append(wetherconteiner);
        let next = 0;
        if (!JSON.parse(localStorage.getItem('wether'))) {
            fetch(url).then(res => res.json())
                .then(date => localStorage.setItem('wether', JSON.stringify(date.consolidated_weather)))
                .then(console.log(JSON.parse(localStorage.getItem('wether'))))
        }
        arrwether = JSON.parse(localStorage.getItem('wether'));
        console.log(arrwether[0].max_temp);
        for (let i = 0; i < 5; i++) {
            let divtemp = document.createElement('div');
            divtemp.textContent = today.getDate() + i + " " + arrMonth[today.getMonth()];
            divtemp.className = 'divtemp';
            wetherconteiner.append(divtemp);
            let divmin = document.createElement('div');
            divmin.className = 'divwether';
            divmin.textContent = "min: " + Math.floor(arrwether[i].min_temp);
            divtemp.append(divmin);
            let divmax = document.createElement('div');
            divmax.className = 'divwether';
            divmax.textContent = "max: " + Math.floor(arrwether[i].max_temp);
            divtemp.append(divmax);
        }
    }
}