class Unicorn{
    constructor(){
        this.x = 50;
        this.y = height - 155;
        this.vy = 0;
        this.gravity = 4.81;
    }  

    jump(){
        if( this.y == height - 155){
            this.vy = -60;
        }
    }

    hits(train){

        let x1 = this.x + 155 * 0.5;
        let y1 = this.y + 155 * 0.5;
        let x2 = train.x + 100 * 0.5;
        let y2 = train.y + 100 * 0.5;
        return collideCircleCircle(x1,y1,155,x2,y2,100);
    }

    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height -155);
    }

    show(){
        image(uImg,this.x,this.y, 155, 155);
        fill(255,50);
        ellipseMode(CORNER);
        ellipse(this.x,this.y, 155, 155)
    }
}