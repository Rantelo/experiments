const ANT_SIZE = 40
const STEP = 3;

/* *
 * TODO:
-* 1. Add sprite of ant
-* 2. Add rotation of ants toward their intention
 * 3. Add ants collition
 * 4. Ant gets crazy when it reaches its destination. Fix it
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
    push();
    imageMode(CENTER);
    translate(x, y)
    rotate(atan2(diry - y, dirx - x));
    image(ant, 0, 0, ANT_SIZE, ANT_SIZE);
    pop();
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
