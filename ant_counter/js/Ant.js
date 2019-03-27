const HEAD_WIDTH = 10
const STEP = 3;

class Ant {
  constructor( x, y, dirx=0, diry=0 ) {
    this.x = x;
    this.y = y;
    this.dirx = dirx;
    this.diry = diry;
    this.dimention = [HEAD_WIDTH, HEAD_WIDTH*2]
  }

  draw() {
 /* Rotation logic
    const a = max(posy, diry) - min(posy, diry);
    const c = dist(posx, posy, dirx, diry);

    const rotation = sin(a,c);

    push()
    translate(posx, posy);
    rotate(rotation)

    const [w,h] = this.dimention;
    strokeWeight(2)
    stroke("black");
    ellipse(0, 0, w, h);
    pop()
  */

    const [w,h] = this.dimention;
    strokeWeight(2)
    stroke("black");
    ellipse(this.x, this.y, w, h);

    strokeWeight(2)
    stroke("black");
    point(this.dirx,this.diry);
  }

  move() {
    // update 1 position closer to final position
    // decrease the distance in x OR y by one STEP

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
