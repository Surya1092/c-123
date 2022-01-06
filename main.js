nose_x = 0 ;
nose_y = 0 ;

right_wrist_x = 0 ;
left_wrist_x = 0 ;

difference = 0 ;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(600,440);
    canvas.position(600,130);
    
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
    console.log("Posenet is Initiaized");
}

function draw(){
    background('#66b2ff');
    textSize(difference);
    fill('#FFFF00');
    text('Surya',50,400);
  
  }

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log(" left wrist = " + leftWristX + " right wrist = " + rightWristY + " difference =  " +  difference);


    }
}
