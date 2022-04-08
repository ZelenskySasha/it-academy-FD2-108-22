function createTable() {

    const table = document.getElementById('table');

    let n = 4;
    let tr = document.createElement('tr');

    for (let i = 0; i < n * n; i++) {
        if (i % n == 0) {
            tr = document.createElement('tr');
            table.append(tr);
        }
        let cell = document.createElement('td');
        cell.style.backgroundColor = "rgb(199," + i * 10 + "," + i * 10 + ")";
        cell.style.width = "100px";
        cell.style.height = "100px"


        cell.textContent = "Какой-то текст";
        cell.setAttribute("id", i + "");
        cell.addEventListener("click", newColor);

        tr.append(cell);

    }
}
createTable();
let sasha = "sda";

function newColor(event) {
    for (let i = 0; i < 16; i++) {
        document.getElementById(i).style.filter = "grayscale(0%)";
    }
    event.target.style.filter = "grayscale(100%)";
}