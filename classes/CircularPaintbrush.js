class CircularPaintbrush extends Paintbrush {
    constructor() {
        super();
    }

    paint() {
        let magOfVelo = this.veloVector.mag();
        let paintWidth = map(magOfVelo, 0, 1, 60, 1);
        fill(this.colour);

        const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

        // find the midpoint between the current and previous mouse points
        const midX = (mouseX + pmouseX) / 2
        const midY = (mouseY + pmouseY) / 2

        // draw a circle at the midpoint, with distance as its diameter
        circle(midX, midY, paintWidth)

    }
}