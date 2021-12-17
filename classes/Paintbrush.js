class Paintbrush {

    constructor() {
        this.colour = color(0, 0, 0);

        this.veloVector = createVector();

    }

    calcVelocity() {
        let velocityX = (mouseX - pmouseX) / (deltaTime)
        let velocityY = (mouseY - pmouseY) / (deltaTime)

        //change in position over change in time for x-variable
        //same withh y-variable

        this.veloVector.set(velocityX, velocityY);
    }

    paint() {
        this.calcVelocity();
        let magOfVelo = this.veloVector.mag();
        let paintWidth = map(magOfVelo, 0, 1, 60, 1);
        stroke(this.colour);
        strokeWeight(paintWidth);
        line(mouseX, mouseY, pmouseX, pmouseY);
        //paint line

    }

    paintRandomDots() {
        fill(this.colour); //creating dots of the same size and different color
        let xCoord = random(mouseX + 20, mouseX - 20); //random coordinate either 20 pixels before or after our currentposition
        let yCoord = random(mouseY + 20, mouseY - 20); //same here
        let randomWidth = random(0, this.paintWidth);
        if (random() > 0.25) {
            ellipse(xCoord, yCoord, randomWidth);
        } //inspired by bieber. the frequency at which the dots appears

    }

    randomChangeColor() {
        this.colour = color(random(255), random(255), random(255));
        console.log(this.colour);
    }

}