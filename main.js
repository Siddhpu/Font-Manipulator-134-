left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;



function setup(){
    video= createCapture(VIDEO);
video.size(400,400);
video.position(10,50);

canvas = createCanvas(800,400);
canvas.position(430,130);

poseNet = ml5.poseNet(video,modeloaded);
poseNet.on('pose',gotPoses);
}

function modeloaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function draw(){
    background("#87CEEB");
    document.getElementById("font-size").innerHTML = "Font Size of the Text Will be =" + difference +"px";
    fill("#FF0000");
    textSize(difference);
    text('TANVI', 50,400);

}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.rightWrist.x;
difference = floor(left_wrist_x - right_wrist_x);

console.log("rightwristx = " + rightWrist + "leftwristy = " + leftWrist);
        console.log("rightwrist_x = "+results[0].pose.rightWrist.x +"rightwrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x +"leftwrist_y = " + results[0].pose.leftWrist.y);
    }
}