const ANT_SIZE = 40
const STEP = 3;

/* *
 * TODO:
-* 1. Add sprite of ant
 * 2. Add rotation of ants toward their intention
 * 3. Add ants collition
 * */

class Ant {
  constructor( x, y, dirx=0, diry=0 ) {
    this.x = x;
    this.y = y;
    this.dirx = dirx;
    this.diry = diry;
  }

  draw() {

    const { x, y, dirx, diry } = this;
    const a = max(y, diry) - min(y, diry);
    const c = dist(x, y, dirx, diry);

    const rotation = sin(a,c);

    /*
    push();

    translate(x - ANT_SIZE/2, y);
    rotate(rotation);
    image(ant, 0, 0, ANT_SIZE, ANT_SIZE);

    pop();
    /* hheeyy */
    push();
    imageMode(CENTER);
    translate(x - ANT_SIZE/2, y - ANT_SIZE/2)
    rotate(rotation);
    image(ant, 0, 0, ANT_SIZE, ANT_SIZE);
    pop();

    /*strokeWeight(2)
    stroke("black");
    ellipse(this.x, this.y, w, h);*/
  }

  move() {
    if (random() > 0.5) {
      if (this.x != this.dirx) {
        this.x = this.x + (Math.sign(this.dirx - this.x) * STEP);
      }
    } else {
      if (this.y != this.diry) {
        this.y = this.y + (Math.sign(this.diry - this.y) * STEP);
      }
    }
  }
}
