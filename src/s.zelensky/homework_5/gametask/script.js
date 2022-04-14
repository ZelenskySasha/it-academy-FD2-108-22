class Game {
    stert() {
        let area = document.getElementById('area');
        let tablesize = getComputedStyle(area).width;
        let table = document.createElement('table');
        table.style.fontSize = ((parseInt(tablesize) / 1.5) / amountOfCell) + "px";
        table.setAttribute('id', 'table')
        area.append(table);
        let tbody = document.createElement('tbody');
        table.append(tbody);
        table.addEventListener('click', this.render);
        for (let n = 0; n < amountOfCell; n++) {
            let tr = document.createElement('tr');
            tbody.append(tr);
            let arrinside = [];
            for (let i = 0; i < amountOfCell; i++) {
                arrinside.push(' ');
                let td = document.createElement('td');
                td.setAttribute('x', i)
                td.setAttribute('y', n)
                td.style.width = (parseInt(tablesize) / amountOfCell) + "px";
                td.style.height = ((parseInt(tablesize) - amountOfCell * 3) / amountOfCell) + "px";
                td.style.border = "2px solid #2C3E50";
                if (i == 0) {
                    td.style.borderLeft = "none";
                }
                if (n == 0) {
                    td.style.borderTop = "none";
                }
                if (i == (amountOfCell - 1)) {
                    td.style.borderRight = "none";
                }
                if (n == (amountOfCell - 1)) {
                    td.style.borderBottom = "none";
                }
                tr.append(td);
            }
            arr.push(arrinside);
        }
    }
    render(event) {
        let draw = 0;
        let rend = true;
        let y = event.target.getAttribute("y");
        let x = event.target.getAttribute("x");
        if (arr[y][x] != ' ') { rend = false; }
        if (turn == '0' && rend) {
            event.target.style.color = "#2C3E50";
            event.target.textContent = '0';
            arr[y][x] = "0";
        } else {
            if (turn == 'x' && rend) {
                //#18BC9C
                event.target.style.color = "#18BC9C";
                event.target.textContent = 'x';
                arr[y][x] = "x";
            }
        }
        if (rend) {
            let winstr = "";
            let strh = "";
            let strv = "";
            for (let i = 0; i < amountToWin; i++) {
                winstr = winstr + turn;
            }
            for (let n = 0; n < amountOfCell; n++) {
                for (let i = 0; i < amountOfCell; i++) {
                    strh = strh + arr[n][i];
                    strv = strv + arr[i][n];
                    if (arr[i][n] != ' ') { draw++ }
                }
                if (strh.includes(winstr)) {
                    GamaOver();
                    break;
                }
                if (strv.includes(winstr)) {
                    GamaOver();
                    break;
                }
                strh = "";
                strv = "";
            }
            strh = "";
            strv = "";
            for (let n = 0; n < amountOfCell; n++) {
                for (let i = 0; i < amountOfCell - n; i++) {
                    strh = strh + arr[i][n + i];
                    strv = strv + arr[i + n][i];
                }
                if (strh.includes(winstr)) {
                    GamaOver();
                    break;
                }
                if (strv.includes(winstr)) {
                    GamaOver();
                    break;
                }
                strh = "";
                strv = "";
            }
            strh = "";
            strv = "";
            console.log("----");
            for (let n = 0; n < amountOfCell; n++) {
                for (let i = 0; i < amountOfCell - n; i++) {
                    strh = strh + arr[(amountOfCell - 1) - i][n + i];
                    strv = strv + arr[i][(amountOfCell - 1) - i - n];
                }
                if (strh.includes(winstr)) {
                    GamaOver();
                    break;
                }
                if (strv.includes(winstr)) {
                    GamaOver();
                    break;
                }
                strh = "";
                strv = "";
            }
            strh = "";
            if (turn == 'x') { turn = '0'; } else { turn = 'x'; }
            if (draw == amountOfCell * amountOfCell) { GamaOver('y'); }
        }
    }
}

function GamaOver(resultofthegame) {
    document.getElementById('table').remove();
    let res = document.createElement('div');
    if (resultofthegame == 'y') {
        res.textContent = "Ничья"
    } else {
        res.textContent = "победил:" + turn;
    }
    document.body.append(res);
    res.classList = "result"
    setTimeout(() => {
        res.remove();
        createNewGame();
    }, 1500);
}
let arr = [];
let turn = '0';
let amountOfCell;
let amountToWin;

function createNewGame() {
    amountOfCell = document.getElementById('firstInput').value;
    amountToWin = document.getElementById('secondInput').value;
    if (isNaN(amountOfCell)) {
        amountOfCell = 3;
        document.getElementById('firstInput').value = 3;
    }
    if (isNaN(amountToWin)) {
        amountToWin = 3;
        document.getElementById('secondInput').value = 3;
    }
    if (amountOfCell > 50) {
        amountOfCell = 50;
        document.getElementById('firstInput').value = 50;
    }
    if (amountOfCell < 2) {
        amountOfCell = 2;
        document.getElementById('firstInput').value = 2;
    }
    if (amountToWin < 2) {
        amountToWin = 2;
        document.getElementById('secondInput').value = 2;
    }
    if (amountToWin > amountOfCell) {
        amountToWin = amountOfCell;
        document.getElementById('secondInput').value = amountOfCell;
    }
    arr = [];
    if (document.getElementById('table')) {
        document.getElementById('table').remove();
    }
    let gamestart = new Game();
    gamestart.stert();
}