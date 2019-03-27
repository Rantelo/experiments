class Farm {
  constructor(population=2) {
    this.population = population;
    this.ants = new Array(population)
      .fill(0)
      .map(e => e = new Ant(
        random(0,width),
        random(0,height),
        random(0,width),
        random(0,height)
      ))
  }

  draw() {
    this.ants.forEach(e => {

      // TODO avoid overlapping
      e.move();
      e.draw();
    })
  }
}
