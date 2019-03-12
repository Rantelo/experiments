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

function preload() {
  //img = loadImage('cosmos.jpg');
}

function setup() {
  createCanvas(800,600);
  //image(img, 0, 0);
  background(20);
  rain = new Rain(50, 1.03);
}

function draw() {
  background(20);
  translate(width/2, height/2); //translate the origin
  rain.update();
  rain.draw();
}


function credits() {
  fill("white");
  textSize(32);
  const txt = "hello StarfoxCredits";
  const title_w = textWidth(txt);
  text(txt, width/2 - title_w/2, height/2)
}
