class Train{
    constructor(){
        this.x = width;
        this.y = height - 100;
    }

    move(){
        this.x -= 16
    }

    show(){
        image(tImg, this.x, this.y, 100, 100)
        fill(255,50);
        ellipseMode(CORNER);
        ellipse(this.x,this.y, 100, 100)
    }
}