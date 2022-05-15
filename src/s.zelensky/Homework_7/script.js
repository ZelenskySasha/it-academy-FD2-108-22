let animatiom_period = true;
let arr = [];
let cardId = 0;
let IdCheak = 0;
let SecondIdCheak = 0;
let amounOfCardSelected = 0;
let firstCard = 0;
let SecondCard = 0;
let OpenMode = true;
let timefrlooking = 0;
let gamepause = true;
let countToWin = 0;
let amountofcrossedcards = 0;
let menuIsOpened = false;
let levelOfTheGame = 'easy';
let CardsBackPic = 'photos/cardface.jpg';
let CardsType = 'animals_';
let time = 0;
let points = 0;
let PoinysMultiply = 0;
let steps = 0;
let combo = 1;
let gameEnd = false;
let bonusForMode = 0;
let totaltime = 0;
let bonusForClosedCard = 0;
let TotalPointsForThisGame = 0;
let resultArr = [];
let newtimer;

function newGame(level) {
    let gamearea = document.getElementById('gamearea');
    let table = document.createElement('table');
    let header = document.getElementById('header');
    let wraper = document.getElementById('wraper');
    let arrhold = 0;
    let arrholdreturn = 0;
    let randomx = 0;
    let randomy = 0;
    let randomX = 0;
    let randomY = 0;
    table.setAttribute('id', 'table');
    table.addEventListener('click', oneStep);
    gamearea.append(table);
    steps = 0;
    let amountX = 0;
    let amountY = 0;
    if (level == 'easy') {
        amountX = 5;
        amountY = 4;
        timefrlooking = 3000;
        CardsBackPic = 'photos/cardface.jpg';
        CardsType = 'animals_';
        header.style.backgroundColor = ('rgb(52, 196, 148)');
        wraper.style.width = '80%';
        wraper.style.left = '10%';
        PoinysMultiply = 1;
        bonusForMode = 100;
    }
    if (level == 'medium') {
        amountX = 6;
        amountY = 4;
        timefrlooking = 2000;
        CardsBackPic = 'photos/cardface_space.jpg';
        CardsType = 'space_';
        header.style.backgroundColor = ('rgb(42, 37, 77)');
        wraper.style.width = '90%';
        wraper.style.left = '5%';
        PoinysMultiply = 2;
        bonusForMode = 200;
    }
    if (level == 'hard') {
        amountX = 7;
        amountY = 4;
        timefrlooking = 1000;
        CardsBackPic = 'photos/cardface_town.jpg';
        CardsType = 'town_';
        header.style.backgroundColor = ('rgb(184, 176, 176)');
        wraper.style.width = '96%';
        wraper.style.left = '2%';
        PoinysMultiply = 3;
        bonusForMode = 400;
    }
    countToWin = (amountX * amountY) / 2;
    let countarray = 0;
    for (let y = 0; y < amountY; y++) {
        arr.push([]);
        for (let x = 0; x < amountX; x++) {
            countarray++;
            arr[y].push([]);
            if (countarray > (amountY * amountX) / 2) { countarray = 1; }
            arr[y][x] = countarray;
        }
    }
    for (let i = 0; i < 100; i++) {
        randomx = Math.floor(Math.random() * amountX);
        randomy = Math.floor(Math.random() * amountY);
        randomX = Math.floor(Math.random() * amountX);
        randomY = Math.floor(Math.random() * amountY);
        arrhold = arr[randomy][randomx];
        arrholdreturn = arr[randomY][randomX];
        arr[randomY][randomX] = arrhold;
        arr[randomy][randomx] = arrholdreturn;
    }
    let secondId = 0;
    for (let i = 0; i < amountY; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let n = 0; n < amountX; n++) {
            secondId++;
            let td = document.createElement('td');
            let divcard = document.createElement('div');
            let cardFace = new Image();
            cardFace.src = CardsBackPic;
            cardFace.style.width = '100%';
            cardFace.style.height = '100%';
            cardFace.setAttribute('id', arr[i][n]);
            cardFace.setAttribute('secondId', secondId);
            td.style.width = Math.floor(100 / amountX) + '%';
            divcard.className = 'divcards';
            tr.append(td);
            td.append(divcard);
            divcard.append(cardFace);
        }
    }
    if (OpenMode) {
        bonusForClosedCard = 200;
        OpenAllCards();
    } else {
        gamepause = false;
        bonusForClosedCard = 200;
    }
}

function oneStep(event) {
    if (animatiom_period && amounOfCardSelected != 2 && !gamepause) {
        animatiom_period = false;
        setTimeout(() => {
            animatiom_period = true;
        }, 610);
        if (event.target.tagName == 'IMG' &&
            event.target.getAttribute("secondId") != 0 &&
            SecondIdCheak != event.target.getAttribute("secondId") &&
            event.target.getAttribute("secondId") != 0 &&
            !menuIsOpened) {
            amounOfCardSelected++;
            cardId = event.target.id;
            IdCheak = cardId;
            if (firstCard == 0) {
                firstCard = event.target;
            } else { SecondCard = event.target; }
            SecondIdCheak = event.target.getAttribute("secondId");
            event.target.className = 'rotateZ';
            setTimeout(() => {
                if (document.getElementById(cardId).getAttribute("secondId") == SecondIdCheak) {
                    document.getElementById(cardId).src = 'photos/' + CardsType + +cardId + '.jpg';
                    document.getElementById(cardId).className = 'rotateZback';
                } else {
                    document.getElementById(cardId).id = 0;
                    document.getElementById(cardId).src = 'photos/' + CardsType + cardId + '.jpg';
                    document.getElementById(cardId).className = 'rotateZback';
                    document.getElementById(0).id = cardId;
                }
                if (amounOfCardSelected == 2) {
                    cheakIfItsMatch();
                }
            }, 305)
        }
    }
}

function cheakIfItsMatch() {
    setTimeout(() => {
        AddSteps();
        if (firstCard.id == SecondCard.id) {
            combo++;
            firstCard.className = 'CardRemove';
            SecondCard.className = 'CardRemove';
            amountofcrossedcards++;
            setTimeout(() => {
                firstCard.style.opacity = "0";
                SecondCard.style.opacity = "0";
                firstCard.setAttribute('secondId', 0);
                SecondCard.setAttribute('secondId', 0);
                amounOfCardSelected = 0;
                firstCard = 0;
                SecondCard = 0;
                AddPoints(10);
                if (amountofcrossedcards == countToWin) {
                    GameOver();
                }
            }, 305);
        } else {
            combo = 1;
            firstCard.classList.remove('rotateZback');
            SecondCard.classList.remove('rotateZback');
            firstCard.className = 'rotateZbackFlip';
            SecondCard.className = 'rotateZbackFlip';
            setTimeout(() => {
                firstCard.classList.remove('rotateZbackFlip');
                SecondCard.classList.remove('rotateZbackFlip');
                firstCard.src = CardsBackPic;
                SecondCard.src = CardsBackPic;
                firstCard.className = 'rotateZFlipToNormal';
                SecondCard.className = 'rotateZFlipToNormal';
                setTimeout(() => {
                    amounOfCardSelected = 0;
                    firstCard = 0;
                    SecondCard = 0;
                    SecondIdCheak = 0;
                }, 305);
            }, 305);
        }
    }, 1000);
}

function createFrameForAllDiv() {
    let headMenu = document.createElement('button');
    let header = document.createElement('div');
    headMenu.textContent = 'Menu';
    headMenu.setAttribute('id', 'menu');
    header.setAttribute('id', 'header');
    document.body.append(header);
    headMenu.addEventListener('click', openMenu);
    header.append(headMenu);
    let wraper = document.createElement('div');
    wraper.setAttribute('id', 'wraper');
    document.body.append(wraper);
    let gamearea = document.createElement('div');
    gamearea.setAttribute('id', 'gamearea');
    wraper.append(gamearea);
    CreateCauntMenu();
    newGame(levelOfTheGame);
}

function OpenAllCards() {
    let elements = document.getElementsByTagName('img');
    for (let elem of elements) {
        elem.className = 'rotateZ';
        setTimeout(() => {
            elem.className = 'rotateZback';
            elem.src = 'photos/' + CardsType + elem.id + '.jpg';
            elem.onload = setTimeout(() => {
                elem.className = 'rotateZbackFlip';
                setTimeout(() => {
                    elem.className = 'rotateZFlipToNormal';
                    elem.src = CardsBackPic;
                    gamepause = false;
                }, 303);
            }, timefrlooking);
        }, 303);
    }
}

function openMenu(ValueForStart) {
    if (!gamepause || ValueForStart == 'NewGame') {
        menuIsOpened = true;
        if (!document.getElementById('openedmenu')) {
            let menu = document.createElement('div');
            let title = document.createElement('div');
            let inputstring = '';
            let close = document.createElement('div');
            let createnewgame = document.createElement('div');
            let levelconteiner = document.createElement('div');
            let levelEasy = document.createElement('div');
            let levelMedium = document.createElement('div');
            let levelDifficult = document.createElement('div');
            let levellabel = document.createElement('div');
            let switchcards = document.createElement('div');
            let switchcardsOpened = document.createElement('div');
            let statistics = document.createElement('div');
            document.body.append(menu);
            menu.append(title);
            if (ValueForStart != 'NewGame') {
                menu.append(close);
            }
            menu.append(createnewgame);
            menu.append(levelconteiner);
            menu.append(switchcards);
            menu.append(switchcardsOpened);
            levelconteiner.append(levellabel);
            levelconteiner.append(levelEasy);
            levelconteiner.append(levelMedium);
            levelconteiner.append(levelDifficult);
            menu.append(statistics);
            switchcardsOpened.setAttribute('id', 'switchcardsOpened');
            switchcards.setAttribute('id', 'switchcards');
            menu.setAttribute('id', 'openedmenu');
            statistics.setAttribute('id', 'statistics');
            levelconteiner.setAttribute('id', 'levelconteiner');
            if (document.getElementById('header')) {
                levelconteiner.style.backgroundColor = document.getElementById('header').style.backgroundColor;
            } else { levelconteiner.style.backgroundColor = '(rgb(165, 165, 165)'; }
            levelEasy.setAttribute('id', 'levelEasy');
            levelMedium.setAttribute('id', 'levelMedium');
            levelDifficult.setAttribute('id', 'levelDifficult');
            title.setAttribute('id', 'title');
            close.setAttribute('id', 'close');
            levellabel.setAttribute('id', 'levellabel');
            createnewgame.setAttribute('id', 'createnewgame');
            levelEasy.className = 'battonformenu';
            levelMedium.className = 'battonformenu';
            levelDifficult.className = 'battonformenu';
            if (ValueForStart != 'NewGame') { close.textContent = 'Close'; }
            title.textContent = 'Menu';
            levelEasy.textContent = 'Easy';
            levelMedium.textContent = 'Medium';
            levellabel.textContent = 'Level';
            levelDifficult.textContent = 'Difficult';
            createnewgame.textContent = 'New game';
            switchcardsOpened.textContent = 'Opened cards';
            switchcards.textContent = 'Closed cards';
            switchcardsOpened.style.backgroundColor = 'rgb(115, 223, 164)';
            if (localStorage.getItem('gamestatistics')) {
                resultArr = JSON.parse(localStorage.getItem('gamestatistics'));
                resultArr.sort((a, b) => b.points - a.points);
            }
            for (let i = 0; i < 10; i++) {
                let divresult = document.createElement('div');
                divresult.className = 'divresult';
                statistics.append(divresult);
                divresult.textContent = i + 1;
                if (resultArr[i]) {
                    inputstring = i + 1 + ' | ' + resultArr[i].points + ' points; ' +
                        resultArr[i].time + ' time; ' +
                        resultArr[i].steps + ' steps.';
                    divresult.textContent = inputstring;
                }
                if (i == 0) {
                    divresult.style.backgroundColor = ('rgb(255,215,0)');
                }
                if (i == 1) {
                    divresult.style.backgroundColor = ('rgb(191,193,194)');
                }
                if (i == 2) {
                    divresult.style.backgroundColor = ('rgb(205, 127, 50)');
                }
            }
            if (ValueForStart != 'NewGame') {
                close.addEventListener('click', () => {
                    menuIsOpened = false;
                    menu.remove();
                })
            };
            levelEasy.addEventListener('click', () => {
                levelOfTheGame = 'easy'
                levelEasy.classList.add('selectedmenu');
                levelMedium.className = 'battonformenu';
                levelDifficult.className = 'battonformenu';
            });
            switchcards.addEventListener('click', () => {
                switchcards.style.backgroundColor = 'rgb(115, 223, 164)';
                switchcardsOpened.style.backgroundColor = 'rgb(252, 217, 124)';
                OpenMode = false;
            });
            switchcardsOpened.addEventListener('click', () => {
                switchcardsOpened.style.backgroundColor = 'rgb(115, 223, 164)';
                switchcards.style.backgroundColor = 'rgb(252, 217, 124)';
                OpenMode = true;
            });
            levelMedium.addEventListener('click', () => {
                levelOfTheGame = 'medium';
                levelMedium.classList.add('selectedmenu');
                levelEasy.className = 'battonformenu';
                levelDifficult.className = 'battonformenu';
            })
            levelDifficult.addEventListener('click', () => {
                levelOfTheGame = 'hard';
                levelDifficult.classList.add('selectedmenu');
                levelEasy.className = 'battonformenu';
                levelMedium.className = 'battonformenu';
            })
            levelMedium.click();
            createnewgame.addEventListener('click', () => {
                SetZero();
                createFrameForAllDiv()
            });
        }
    }
}

function CreateCauntMenu() {
    let header = document.getElementById('header');
    let topmenu = document.createElement('div');
    let counter = document.createElement('div');
    let timer = document.createElement('div');
    let steps = document.createElement('div');
    let seconds = 0;
    let minutes = 0;
    steps.setAttribute('id', 'steps')
    topmenu.setAttribute('id', 'topmenu');
    counter.setAttribute('id', 'counter');
    timer.setAttribute('id', 'timer');
    counter.className = 'blockMenu';
    timer.className = 'blockMenu';
    steps.className = 'blockMenu';
    header.append(topmenu);
    topmenu.append(counter);
    topmenu.append(timer);
    topmenu.append(steps);
    timer.textContent = '00:00';
    counter.textContent = '000000';
    steps.textContent = '000';
    timer.style.backgroundColor = ('rgb(255,215,0)');
    gameEnd = false;
    clearInterval(newtimer);
    newtimer = setInterval(function() {
        if (!menuIsOpened && !gamepause) {
            time++;
        }
        seconds = time % 60;
        minutes = Math.floor(time / 60);
        if (minutes < 1) {
            timer.style.backgroundColor = ('rgb(255,215,0)');
        }
        if (minutes < 3 && minutes > 1) {
            timer.style.backgroundColor = ('rgb(191,193,194)');
        }
        if (minutes > 3) {
            timer.style.backgroundColor = ('rgb(205, 127, 50)');
        }
        if (seconds < 10) { seconds = '0' + seconds; }
        if (minutes < 10) { minutes = '0' + minutes; }
        timer.textContent = minutes + ':' + seconds;
        if (minutes == 60 || gameEnd) {
            clearInterval(newtimer);
            gameEnd = false;
        }
    }, 1000);
}

function AddPoints(n) {

    let bonus = n * PoinysMultiply;
    let result = 0;
    let bonusShow = document.createElement('div');
    bonusShow.className = 'bonusShow';
    if (!document.getElementById('bonusinput')) {
        let bonusinput = document.createElement('div');
        bonusinput.setAttribute('id', 'bonusinput');
        document.getElementById('topmenu').append(bonusinput);
    }
    document.getElementById('bonusinput').append(bonusShow);
    points = Math.floor(bonus * (0.8 + (0.1 * combo))) + points;
    let counter = document.getElementById('counter');
    for (let i = 0; i < 5 - points.toString().length; i++) {
        result = result + '0'
    }
    if (combo < 3) {
        bonusShow.textContent = '+' + bonus;
    } else {
        bonusShow.textContent = '+' + Math.floor(bonus * (0.8 + (0.1 * combo))) + '*(' + (0.8 + (0.1 * combo)).toFixed(1) + ')';
    }
    result = result + points;
    counter.textContent = result;
    setTimeout(() => {
        bonusShow.classList.add('BonusRemove');
        setTimeout(() => { bonusShow.remove(); }, 1500)
    }, 4000);
}

function AddSteps() {
    let result = '';
    if (steps < 1000) { steps++; }
    let stepsdiv = document.getElementById('steps');
    for (let i = 0; i < 3 - steps.toString().length; i++) {
        result = result + '0';
    }
    result = result + steps;
    stepsdiv.textContent = result;
}

function GameOver() {
    SetZero();
    let gameresult = document.createElement('div');
    let gameover = document.createElement('div');
    let next = document.createElement('div');
    gameresult.setAttribute('id', 'gameresult')
    gameover.setAttribute('id', 'gameover')
    document.body.append(gameresult);
    gameresult.append(gameover);
    gameover.textContent = 'GAME OVER';
    for (let i = 0; i < 6; i++) {
        let reultOfTheGame = document.createElement('div');
        gameresult.append(reultOfTheGame);
        reultOfTheGame.className = "reultOfTheGame";
        if (i == 0) {
            reultOfTheGame.textContent = 'Points: ' + points;
        }
        if (i == 1) {
            reultOfTheGame.textContent = 'Steps: ' + steps + ' (Poits fot steps ' +
                Math.floor(1000 / steps) + ')';
        }
        if (i == 2) {
            reultOfTheGame.textContent = 'Time: ' + totaltime + ' (Poits fot time ' +
                Math.floor(5000 / totaltime) + ')';
        }
        if (i == 3) {
            reultOfTheGame.textContent = 'Bonus for mode: ' + bonusForMode;
        }
        if (i == 4) {
            reultOfTheGame.textContent = 'Bonus for closed cards: ' + bonusForClosedCard;
        }
        if (i == 5) {
            TotalPointsForThisGame = bonusForClosedCard + bonusForMode +
                Math.floor(5000 / totaltime) + Math.floor(1000 / steps) + points;
            reultOfTheGame.textContent = 'Total: ' + TotalPointsForThisGame;
        }
    }
    let dataObj = {
        points: TotalPointsForThisGame,
        steps: steps,
        time: totaltime,
        bonusForMode: bonusForMode
    };
    resultArr.push(dataObj);
    localStorage.setItem('gamestatistics', JSON.stringify(resultArr));
    gameresult.append(next);
    next.setAttribute('id', 'next');
    next.textContent = 'next';
    next.addEventListener('click', () => {
        gameresult.remove();
        openMenu('NewGame');
    });
}

function SetZero() {
    menuIsOpened = false;
    if (document.getElementById('openedmenu')) {
        document.getElementById('openedmenu').remove();
    }
    if (document.getElementById('header')) {
        document.getElementById('header').remove();
    }
    if (document.getElementById('wraper')) {
        document.getElementById('wraper').remove();
    }
    animatiom_period = true;
    arr = [];
    cardId = 0;
    IdCheak = 0;
    SecondIdCheak = 0;
    amounOfCardSelected = 0;
    firstCard = 0;
    SecondCard = 0;
    timefrlooking = 0;
    gamepause = true;
    countToWin = 0;
    amountofcrossedcards = 0;
    gameEnd = true;
    totaltime = time;
    time = 0;
}