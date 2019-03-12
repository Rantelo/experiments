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

let rain;
const MAX_DEPTH = 100;
function setup() {
  createCanvas(800,600);
  background(20);
  rain = new Rain(50, 1.03);
}

function draw() {
  background(20);
  translate(width/2, height/2); //translate the origin
  rain.update();
  rain.draw();
}

class Rain {
  constructor(count, velocity) {
    this.count = count;
    this.velocity = velocity;
    this.stars = new Array(count)
      .fill(0)
      .map(e => new Star());
  }
  update() {
    this.stars = this.stars
      .map(s => {
        if (s.z > MAX_DEPTH) { s = new Star() }
        s.z *= this.velocity;
        return s;
      })
  }
  draw() {
    this.stars.forEach(s => s.draw());
  }
}
class Star {
  constructor(x, y, z) {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(1, MAX_DEPTH);
  }
  draw() {
    const {x, y, z} = this;
    strokeWeight(map(1 + z, 0, MAX_DEPTH, 0, 3));
    stroke("white");
    point(
      map(x*z, 0, width*MAX_DEPTH, 0, width),
      map(y*z, 0, height*MAX_DEPTH, 0, height)
      );
  }
}

function credits() {
  fill("white");
  textSize(32);
  const txt = "hello StarfoxCredits";
  const title_w = textWidth(txt);
  text(txt, width/2 - title_w/2, height/2)
}
