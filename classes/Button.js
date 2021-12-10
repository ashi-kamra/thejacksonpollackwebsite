class Button {

    constructor(color, x, y, brush) {
        this.color = color;
        this.brush = brush;
        this.x = x;
        this.y = y;
        this.button = createButton(this.color);
        this.button.position(this.x, this.y)
        this.button.mousePressed(() => this.changeColor(this.brush));
    }

    changeColor() {
        console.log("a", this.brush);
        this.brush.colour = this.color;
        // console.log(this.color);
    }



}