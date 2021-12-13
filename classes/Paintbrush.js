class Paintbrush {

    constructor() {
        this.colour = color(0, 0, 0);
        this.vMouse = {
            velocityX: 0,
            velocityY: 0,
            pVelocityX: 0,
            pVelocityY: 0
        };
        this.accelVector = createVector();
        this.veloVector = createVector();

    }

    calcVelocity() {
        // let pVMouse = {...this.vMouse}; //previous velocity object literal
        // let currentVelocityX = pVMouse.velocityX 
        // let currentVelocityY = pVMouse.velocityY

        this.vMouse.velocityX = (mouseX - pmouseX) / (deltaTime) //change in position over change in time for x-variable
        this.vMouse.velocityY = (mouseY - pmouseY) / (deltaTime) //same withh y-variable

        // this.vMouse.pVelocityX = currentVelocityX; //setting the previous velocity to our current velocity to update
        // this.vMouse.pVelocityY = currentVelocityY; //same here
        this.veloVector.set(this.vMouse.velocityX, this.vMouse.velocityY);
        return this.veloVector;
    }

    paint() {

        let magOfVelo = this.calcVelocity().mag();
        let paintWidth = map(magOfVelo, 0, 1, 60, 1);
        // console.log(magOfVelo)
        stroke(this.colour);
        strokeWeight(paintWidth);
        line(mouseX, mouseY, pmouseX, pmouseY);
        //paint line; need to find the magnitude of the acceleration vector
        //need to make it more extreme, like its not an even conversion
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

    changeColor() {
        this.colour = color(random(255), random(255), random(255));
        console.log(this.colour);
    }

}