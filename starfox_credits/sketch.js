/* *
 * StarfoxCredits
 *   - Background image of cosmos
 *   - Stars comming to the screen
 *   - Background music loop
 *   - Credits
 *     - Font from Starfox
 *     - Text appear from right to left. It stays in the middle of screen for a
 *       moment and then flights to the image like the followign link:
 *       https://youtu.be/A1AshhzV4Xk?t=154
 * */

const MAX_DEPTH = 100;
let rain;
let img;
let canvas;


function preload() {
  img = loadImage('cosmos.png');
}
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  background(20);
  rain = new Rain(100, 1.01);
}

function draw() {
  image(img, 0, 0, width, height);
  translate(width/2, height/2); //translate the origin
  rain.update();
  rain.draw();
}

function credits() {
  fill("white");
  textSize(32);
  const txt = "hello StarfoxCredits";
  const title_w = textWidth(txt);
  text(txt, width/2 - title_w/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
