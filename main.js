function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(397, 298);
    canvas = createCanvas(397, 298);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298)
}