img = "";
status = "";

function preload()
{
    img = loadImage("kitchen.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("modelLoaded")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}

function draw()
{
    image(img, 0, 0, 600, 450);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 300, 560);

    fill("#FF0000");
    text("Cat", 270, 115);
    noFill();
    stroke("#FF0000");
    rect(250, 100, 200, 500);
}