

function draw() {
	game()
}
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup();
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380 ,380);
  video.hide()
}












