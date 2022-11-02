song1 ="";
song2 ="";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide() ;

    posenet = ml5.poseNet(video,modelLoaded);

    posenet.on('pose',gotResults)
}

function draw(){
    image(video,0,0,600,450);
}

function preload(){
    song1 = loadSound("Music1.mp3");
    song2 = loadSound("Music2.mp3");
}

function modelLoaded(){
    console.log("The model has been loaded")
}

function gotResults(results){
    if(results.length>0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = "+leftWristx+" leftwristy = "+ leftWristy);

        righrWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightwristx = "+rightWristx+" rightwristy = "+ rightWristy);
    }
}