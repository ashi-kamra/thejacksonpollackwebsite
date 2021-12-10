class Paintbrush {
    ////CHECK OUT WHAT MS. DBB SENT

    constructor(){
        this.colour = color(0, 0, 0);
        this.vMouse = {
            velocityX: 0,
            velocityY: 0,
            pVelocityX: 0,
            pVelocityY: 0
        };
        this.accelVector = createVector();
        this.veloVector = createVector();
        //this.distance = mouseX - pmouseX;
    }

    calcVelocity(){
        let pVMouse = {...this.vMouse};
        let currentVelocityX = pVMouse.velocityX
        let currentVelocityY = pVMouse.velocityY

        this.vMouse.velocityX = (mouseX-pmouseX)/(deltaTime)
        this.vMouse.velocityY = (mouseY-pmouseY)/(deltaTime)

        this.vMouse.pVelocityX = currentVelocityX;
        this.vMouse.pVelocityY = currentVelocityY;
        this.veloVector.set(this.vMouse.velocityX, this.vMouse.velocityY);
        return this.veloVector;
    }

    paint(){
        //use lerp to make it look smoother, drawing smaller segments in one line
            // use a current and previous position vector
        //need to keep track of goalwidth and starting width
 
        this.calcVelocity();
        let magOfVelo = this.calcVelocity().mag();
        let paintWidth = map(magOfVelo, 0, 1, 60, 1);
        // console.log(magOfVelo)
        stroke(this.colour);
        strokeWeight(paintWidth);
        line(mouseX, mouseY, pmouseX, pmouseY);
        //paint line; need to find the magnitude of the acceleration vector
        //need to make it more extreme, like its not an even conversion
    }

    paintRandomDots(){
        fill(this.colour); //creating dots of the same size and different color
        let xCoord = random(mouseX + 20, mouseX - 20);
        let yCoord = random(mouseY + 20, mouseY - 20);
        let randomWidth = random(0, this.paintWidth) ;
        if (random() > 0.25){
            ellipse(xCoord, yCoord, randomWidth);
        }
        

    }

    changeColor(){
        this.colour = color(random(255), random(255), random(255));
        console.log(this.colour);
    }

}