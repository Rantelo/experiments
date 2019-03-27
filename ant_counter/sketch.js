const STEP = 2;
let myAnt;
function setup() {
  createCanvas(640,640);
  background(245);
  frameRate(30);
  myAnt = new Ant(400,300,30,600);
}

function draw() {
  fill("white");
  myAnt.move();
  myAnt.draw();
}

class Ant {
  constructor( posx, posy, dirx, diry ) {
    this.posx = posx;
    this.posy = posy;
    this.dirx = dirx;
    this.diry = diry;
    const head_width = 10
    this.dimention = [head_width,head_width*3]
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
    ellipse(this.posx, this.posy, w, h);

    strokeWeight(2)
    stroke("black");
    point(this.dirx,this.diry);
  }

  move() {
    // update 1 position closer to final position
    // decrease the distance in x OR y by one STEP

    if (random() > 0.5) {
      if (this.posx != this.dirx) {
        this.posx = this.posx + (Math.sign(this.dirx - this.posx) * STEP);
      }
    } else {
      if (this.posy != this.diry) {
        this.posy = this.posy + (Math.sign(this.diry - this.posy) * STEP);
      }
    }
  }
}

class Farm {
  constructor(population) {
    this.population = population;
    this.ants = new Array(population)
      .fill(0);
  }

}
