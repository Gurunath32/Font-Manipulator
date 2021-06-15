leftwristX=0;
rightwristX=0;
difference=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,450);
    canvas.position(560,115);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX - rightwristX);
        console.log("Left WristX- "+leftwristX+", Right WristX- "+rightwristX);
        console.log("The Difference Is "+difference);
    }
}

function draw() {
    console.log("test");
    background('#787878');
    document.getElementById("font_size").innerHTML="Font Size Of Text Will Be = "+difference+" px";
    fill('#FFFF00');
    textSize(difference);
    text('Gurunath',50,200);
}