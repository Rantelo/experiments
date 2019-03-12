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
