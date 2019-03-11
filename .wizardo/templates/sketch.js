function setup() {
  createCanvas(640,360);
  background(20);
}

function draw() {
  fill("white");
  textSize(32);
  const txt = "hello ___Experiment___";
  const title_w = textWidth(txt);
  text(txt, width/2 - title_w/2, height/2)
}

