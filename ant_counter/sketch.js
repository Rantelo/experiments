function setup() {
  createCanvas(640,640);
  background(245);
}

function draw() {
  fill("white");
  const myAnt = new Ant(400,300,30,600);
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
    const { posx, posy, dirx, diry } = this;


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


    strokeWeight(2)
    stroke("black");
    point(dirx,diry);
  }
}

class Farm {
  constructor(population) {
    this.population = population;
    this.ants = new Array(population)
      .fill(0);
  }

}
