let unicorn;
let uImg;
let bImg;
let tImg;
let trains = [];

function preload(){
    uImg = loadImage("./00034 Dinosaur/SVG/00034 Dinosaur.svg")
    bImg = loadImage('background.jpg') 
    tImg = loadImage("./00384 Sherif Cactus/SVG/00384 Sherif Cactus.svg")
}


function setup() {
    createCanvas(1440, 740);
    unicorn =  new Unicorn
}



function keyPressed(){
    if (key == ' '){
        unicorn.jump();
    }
}

function draw() {
    if(random(1) < 0.009){
        trains.push(new Train())
    }
    background(bImg);
    for ( let t of trains){
        t.move();
        t.show();
        if(unicorn.hits(t)){
            console.log('game over');
            noLoop();
        }
    }
    unicorn.show();
    unicorn.move();
}