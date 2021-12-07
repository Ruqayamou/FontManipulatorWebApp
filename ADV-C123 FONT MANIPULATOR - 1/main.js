function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(600, 260);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
background('white')
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}