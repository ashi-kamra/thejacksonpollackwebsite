let buttonArray = [];


function setup() {
    let canvas = createCanvas(windowWidth / 2.5, 600);
    canvas.parent("midSideBar"); //for the css file. p5.js automatically puts underneath all the div tags. but we're overriding that
    canvas.mouseClicked(myMousePressed); ///only when the canvas is clicked does the color change

    paintbrushTrial = new Paintbrush();

    initializeButtons();

    let resetButton = createButton('reset canvas!');
    resetButton.position(665, 130);
    resetButton.mousePressed(resetCanvas);
}

function draw() {
    background(254, 251, 234, 0);
    //transparent background to get the previous lines to show up
    paintbrushTrial.paint();
    paintbrushTrial.paintRandomDots();

}

function resetCanvas() {
    background(255, 255, 255);
}

function myMousePressed() {
    paintbrushTrial.randomChangeColor();

}


function initializeButtons() {
    let buttonColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    let xlocation = .5;
    let yValueOfButton = 170;
    let i = 0;
    for (let increment = 0; increment < 2; increment += (1 / 3)) {
        xlocation += increment;
        let x = windowWidth / 3.2 + i * 80;
        //xlocation * windowWidth / 3 + 50
        let buttonItem = new Button(buttonColors[i], x, yValueOfButton, paintbrushTrial);
        buttonArray.push(buttonItem);
        i++;
    }

}