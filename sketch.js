let unicorn;
let uImg;
let bImg;
let tImg;
let trains = [];
let soundClassifier;
let score = 0;
let levelChange = 5000
let prevTrainX = -1000;
let bgOffset = 0;


function preload(){
    const options = { probabilityThreshold: 0.85 };
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options)
    uImg = loadImage("./00034 Dinosaur/SVG/00034 Dinosaur.svg")
    bImg = loadImage('background.jpg') 
    tImg = loadImage("./00384 Sherif Cactus/SVG/00384 Sherif Cactus.svg")
}


function setup() {
    createCanvas(1440, 740);
    unicorn =  new Unicorn
    soundClassifier.classify(gotCommand)
}

function gotCommand(error, results){
    if(error) {
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if(results[0].label == 'up'){
        unicorn.jump();
    }
}



function keyPressed(){
    if (key == ' '){
        unicorn.jump();
    }
}

function draw() {
    background(bImg);
    if(random(1) < 0.09 && canPushTrain() ){
        const newTrain = new Train();
        trains.push(newTrain);
        prevTrainX = newTrain.x;
    }

    bgOffset -= 2;
    if (bgOffset < -width) {
        bgOffset = 0;
    }
    image(bImg, bgOffset, 0, width, height);
    image(bImg, bgOffset + width, 0, width, height)
    for ( let t of trains){
        t.move();
        t.show();
        if(unicorn.hits(t)){
            console.log('game over');
            noLoop();
        }
        if(t.x){
            score++;
            t.passed = true;
        }
    }
    unicorn.show();
    unicorn.move();
    // Display score
    textSize(32);
    fill(255);
    text('Score: ' + score, 10, 30);
}


function canPushTrain() {
    if (trains.length === 0) {
        return true; // If no trains exist, push a new one
    }
    // Check the x-position of the last train
    const lastTrain = trains[trains.length - 1];
    //console.log(lastTrain.x)
    if (width - lastTrain.x >= prevTrainX) {
        return true; // If minimum distance is met, push a new train
    }
    return false; // Otherwise, wait for the next frame to check again
}