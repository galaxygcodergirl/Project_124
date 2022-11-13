function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(565,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){

}
function draw(){
    background("#b3f5ea");
}
function modelLoaded(){
    console.log("PoseNet has started working.");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}