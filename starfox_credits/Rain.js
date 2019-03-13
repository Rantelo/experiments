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
