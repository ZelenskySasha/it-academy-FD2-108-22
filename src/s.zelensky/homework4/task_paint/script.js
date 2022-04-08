function create(shapesname) {

    //alert(document.getElementById('inputleft').value);

    const user = new Shape;
    user.generate(shapesname);

}
let amountoftriangle = 0;
let amountofrectangle = 0;
let amountofcircle = 0;

class Shape {
    constructor() {

    }
    generate(shapesname) {
        let shape = document.createElement('div');
        let text = document.createElement('p');
        this.shape = shape;


        let xposition = parseInt(document.getElementById('inputleft').value);
        let yposition = parseInt(document.getElementById('inputtop').value);

        if (xposition > 500) { xposition = 500; }
        if (xposition < 0) {
            xposition = 0;
        }
        if (yposition > 500) { yposition = 500; }
        if (yposition < 0) { yposition = 0; }
        shape.style.left = (123 + xposition) + "px";
        text.style.fontSize = "30px";
        text.style.position = "absolute";
        text.style.left = (147 + xposition) + "px";
        if (shapesname != "triangle") {
            shape.className = shapesname;
            shape.style.backgroundColor = document.getElementById('inputcolor').value;
            shape.style.top = (213 + yposition) + "px";
            text.style.top = (190 + yposition) + "px";
        } else {
            this.generateTriangle();
            shape.style.top = (188 + yposition) + "px";
            text.style.top = (200 + yposition) + "px";
        }

        if (shapesname == "rectangle") {
            amountofrectangle++;
            text.style.marginLeft = -amountofrectangle.toString().length * 7 + "px";
            //text.innerHTML = amountofrectangle;
        }
        if (shapesname == "triangle") {
            amountoftriangle++;
            text.style.marginLeft = -amountoftriangle.toString().length * 7 + "px";
            //text.innerHTML = amountoftriangle;

        }
        if (shapesname == "circle") {
            amountofcircle++;
            text.style.marginLeft = -amountofcircle.toString().length * 7 + "px";
            //text.innerHTML = amountofcircle;
        }





        document.body.append(shape);
        document.body.append(text);
    }
    generateTriangle() {
        this.shape.style.position = "absolute";
        this.shape.style.border = " 25px solid transparent";
        this.shape.style.borderBottom = "50px solid " + document.getElementById('inputcolor').value;



    }

}