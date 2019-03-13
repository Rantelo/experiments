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
let credits;
let img;
let myfont;
let canvas;

function preload() {
  img = loadImage("cosmos.png");
  myfont = loadFont("Star-Fox-Starwing.ttf");
}
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  rain = new Rain(100, 1.01);
  credits = new Credits([
    "Starfox Credits",
    "Developer - rantelo",
    "Tech Stack - P5.js"
  ]);

  textFont(myfont);
}

function draw() {
  image(img, 0, 0, width, height);
  credits.draw();

  translate(width/2, height/2); //translate the origin to center for stars
  rain.update();
  rain.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
