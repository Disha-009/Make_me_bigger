noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
size=0;

function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(700 ,100);
    video= createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("posenet loaded");
}

function draw(){
    background("cornflowerblue");
    circle(noseX, noseY, size);
    fill(186, 235, 9);
    stroke(186, 235, 9);
    document.getElementById('cc-size').innerHTML="Radius of Circle= "+size;
    
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        size=floor(leftWristX - rightWristX);

}


}


