class playGame {




    step() {
        let arr = playGame.arr;
        let div = document.getElementById(this.id);
        let figure = "";
        let str = "";
        let amountwin = document.getElementById('amountwin').value;
        if (amountwin < 2) { amountwin = 2; };
        if (amountwin > n) { amountwin = n; };
        let resultcheck = "";
        if (div.innerHTML != "x" && div.innerHTML != "0" && work) {
            let id = this.id;
            div.style.fontSize = Math.floor(500 / n) + "px";
            let x = id % n;
            let y = Math.floor(id / n) + 1;


            if (turn) {
                figure = "x";
                div.innerHTML = "x";
                div.style.color = "green";
                arr[y][x] = "x";
                turn = false;
            } else {
                figure = "0";
                div.innerHTML = "0";
                div.style.color = "orange";
                arr[y][x] = "0";
                turn = true;
            }
            for (let i = 0; i < amountwin; i++) {
                resultcheck = resultcheck + figure;
            }
            //(--)
            for (let iy = 0; iy < n; iy++) {

                for (let ix = 0; ix < n; ix++) {
                    str = str + arr[iy + 1][ix];
                }
                str = str + "/";
            }
            if (str.includes(resultcheck)) {
                finish(figure);
            }
            str = "";
            //(||)
            for (let ix = 0; ix < n; ix++) {
                for (let iy = 0; iy < n; iy++) {
                    str = str + arr[iy + 1][ix];
                }
                str = str + "/";
            }
            if (str.includes(resultcheck)) { finish(figure); }
            str = "";
            //(\\)
            for (let ix = 0; ix < n; ix++) {
                for (let iy = 0; iy < (n - ix); iy++) {
                    str = str + arr[iy + 1][ix + iy];
                }
                str = str + "/";
                for (let iy = 0; iy < (n - ix); iy++) {
                    str = str + arr[n - iy][n - ix - 1 - iy];
                }
                str = str + "/";
            }
            if (str.includes(resultcheck)) { finish(figure); }
            str = "";
            //(//)
            for (let ix = 0; ix < n; ix++) {
                for (let iy = 0; iy < (n - ix); iy++) {
                    str = str + arr[n - iy][iy + ix];
                }
                str = str + "/";
                for (let iy = 0; iy < (n - ix); iy++) {
                    str = str + arr[iy + 1][n - iy - 1 - ix];
                }
                str = str + "/";
            }
            if (str.includes(resultcheck)) { finish(figure); }
            let ct = 0;
            for (let i = 0; i <= n; i++) {

                for (let ii = 0; ii < n; ii++) {
                    if (arr[i][ii] == " ") { ct++; }
                }

            }
            if (ct == 0) { finish("draw"); }


        }

    }
    create() {

        let arr = [n];
        this.arr = arr;
        for (let i = 0; i < n; i++) {
            let insidearr = [n];
            for (let ii = 0; ii < n; ii++) {
                insidearr[ii] = " ";
            }
            arr.push(insidearr);
        }

        playGame.arr = arr;
        let id = 0;
        this.id = id

        let area = document.getElementById("area");



        for (let i = 0; i < n ** 2; i++) {
            let div = document.createElement('div');
            div.classList = "divblocks";
            div.addEventListener("click", this.step);

            div.setAttribute("id", i);
            div.style.width = Math.floor(700 / n) - 20 + 1 * n + "px";
            div.style.height = Math.floor(700 / n) - 20 + 1 * n + "px";
            if (i < n) {
                div.style.borderTop = "none";
            }
            if (i % n == 0) {

                div.style.borderLeft = "none";
            }
            if (i % n == n - 1) {

                div.style.borderRight = "none";
            }
            if (n ** 2 - i < n + 1) {
                div.style.borderBottom = "none";
            }
            area.append(div);
        }



    }

}

let turn = false;
let render = false;
let work = true;
let winnerofthegame = true;

function finish(figure) {
    work = false;

    let winblock = document.createElement('div');

    winblock.style.width = "700px";
    winblock.setAttribute("id", "winblock");
    winblock.style.height = "100px";
    winblock.style.position = "absolute";
    winblock.style.top = "400px";
    winblock.style.textAlign = "center";
    winblock.style.fontSize = "90px";
    winblock.style.color = "white";
    if (figure != "draw") {
        winblock.style.backgroundColor = "rgb(40, 10, 173)";
        winblock.innerHTML = "победил: " + figure;
        winnerofthegame = false;
    } else {
        if (winnerofthegame) {
            winblock.style.backgroundColor = "green";
            winblock.innerHTML = "Ничья";

        }

    }


    document.body.append(winblock);

    setTimeout(createNewGame, 1400);


}

function createNewGame() {

    winnerofthegame = true;
    if (document.getElementById('winblock')) {
        document.getElementById('winblock').remove();
    }

    work = true;
    let amountofcell = document.getElementById('amountofcell').value;
    n = amountofcell;
    if (n > 9) { n = 9; }
    if (n < 2) { n = 2; }

    if (render) {
        document.getElementById('area').remove();
    }
    let area = document.createElement('div');
    area.setAttribute("id", 'area');
    render = true;
    document.body.append(area);
    let game = new playGame("Mathematics");
    game.create();
}