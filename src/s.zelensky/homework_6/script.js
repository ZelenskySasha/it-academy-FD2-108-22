function CreateAll(n) {
    if (isNaN(n)) { n = 0; } else { countmonth = countmonth + n; }
    let today = new Date();
    let firstDate = new Date();
    let seconfDate = new Date();
    let startDate = new Date();
    firstDate.setMonth(firstDate.getMonth() + countmonth);
    seconfDate.setMonth(seconfDate.getMonth() + countmonth);
    startDate.setMonth(startDate.getMonth() + countmonth);
    if (today.getMonth() == firstDate.getMonth() && today.getFullYear() == firstDate.getFullYear()) {
        today = today.getDate();
    }
    console.log(firstDate)
    console.log(seconfDate)
    console.log(startDate)
    document.getElementById('year').textContent = firstDate.getFullYear();
    document.getElementById('month').textContent = arrMonth[firstDate.getMonth()];
    startDate.setDate(1);
    let startday = startDate.getDay();
    seconfDate.setMonth(seconfDate.getMonth() + 1);
    let amountofday = (seconfDate - firstDate) / 1000 / 3600 / 24;
    console.log(amountofday);
    let arrDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (document.getElementById('table')) { document.getElementById('table').remove(); }
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let calendarDiv = document.getElementById('calendar');
    table.setAttribute('id', 'table');
    calendarDiv.append(table);
    table.className = "calendar";
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
                        if (Number.isInteger(today) && (today == i + 7 * n - 6 - startday)) {
                            td.textContent = td.textContent + " Today";
                            td.style.backgroundColor = "rgb(197, 240, 109)";
                        }
                        if (i % 7 == 6 || i % 7 == 0) { td.style.backgroundColor = "rgb(240, 161, 161)"; }
                    }

                }
            }
            tr.append(td);
        }
    }
    // SelectData();
}
let arrMonth = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December',
]
let countmonth = 0;

// <input type="time" id="time" name="time" />
function SelectData() {
    // event.target.style.backgroundColor = "red";
    if (!document.getElementById('toDoList')) {
        let toDoList = document.createElement('div');
        toDoList.setAttribute('id', 'toDoList')
        toDoList.setAttribute('id', 'toDoList');
        toDoList.className = "toDoList";
        document.getElementById('main').append(toDoList);
        let datediv = document.createElement('div');
        datediv.textContent = "2021 January 02";
        toDoList.className = "toDoListDate";
        toDoList.append(datediv);
    }
    if (!document.getElementById('createNotes') && !document.getElementById('creationNotes')) {
        let createNotes = document.createElement('div');
        createNotes.setAttribute('id', 'createNotes')
        createNotes.className = "createNotes";
        createNotes.textContent = "Create notes";
        toDoList.append(createNotes);
        createNotes.addEventListener('click', createNewNode);
    }
}

function createNewNode() {
    if (document.getElementById('createNotes')) {
        document.getElementById('createNotes').remove();
        let creationNotes = document.createElement('div');
        creationNotes.setAttribute('id', 'creationNotes');
        creationNotes.className = "createNotes";
        //creationNotes.textContent = "Crsdseate notes";
        toDoList.append(creationNotes);
        let submitButton = document.createElement('button');
        creationNotes.append(submitButton);
        submitButton.setAttribute('id', 'submitButton');
        submitButton.textContent = "Submit";
        let textform = document.createElement('input');
        textform.value = "Some text";
        textform.setAttribute('id', 'textform');
        creationNotes.append(textform);
        let dateform = document.createElement('input');
        dateform.setAttribute('type', 'time');
        dateform.setAttribute('id', 'dateform');
        creationNotes.append(dateform);
        submitButton.addEventListener('click', NewNode);
    }

}
let textform = "";

function NewNode() {
    textform = document.getElementById('textform').value;
    document.getElementById('creationNotes').remove();
    RenderNotes();
    //SelectData();
}

function RenderNotes() {

    let toDoList = document.getElementById('toDoList');
    let notes = document.createElement('div');
    let notesLeftPart = document.createElement('div');
    notesLeftPart.className = "notesLeftPart"
    notesLeftPart.textContent = "20:00";
    notes.className = "notes";
    notes.textContent = textform;
    toDoList.append(notes);
    notes.append(notesLeftPart);
    SelectData();

}
//let notesLeftPart = document.createElement('div');
//notesLeftPart.className = "notesLeftPart"
//notesLeftPart.textContent = "20:00";
//notes.append(notesLeftPart);"20:00";
//notes.append(notesLeftPart);