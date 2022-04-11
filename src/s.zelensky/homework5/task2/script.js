function createElements() {
    let arrMiddle = ["Рыбы", "Птицы", "Пресмыкающиеся", "Земноводные", "ракообразные"];
    let mainUl = document.createElement('ul');
    let mainLi = document.createElement('Li');
    mainLi.addEventListener("click", hide);
    mainLi.innerText = "Животные";
    document.body.append(mainLi);
    mainLi.appendChild(mainUl)
    for (let i = 0; i < 5; i++) {
        let middleLi = document.createElement('li');
        let middleUl = document.createElement('ul');
        middleLi.style.listStyle = "circle inside";
        middleLi.innerText = arrMiddle[i];
        mainUl.append(middleLi);

        middleLi.append(middleUl);
        for (let n = 0; n < 3; n++) {
            let bottomLi = document.createElement('li');
            bottomLi.style.listStyle = "square inside";
            bottomLi.innerText = "text_" + ((3 * i) + n + 1);
            middleUl.append(bottomLi);
        }
    }
}

function hide(event) {
    if (event.target.children.item(0)) {
        if (event.target.children.item(0).style.display == "none") {
            event.target.children.item(0).style.display = "grid";
        } else {
            event.target.children.item(0).style.display = "none";
        }
    }

}