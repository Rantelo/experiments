let farm;
function setup() {
  createCanvas(640,640);
  background(245);
  frameRate(30);
  farm = new Farm(100);
}

function draw() {
  background(245);

  farm.draw()
}

