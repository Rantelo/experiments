/* *
 * TODO:
 * 1. Find a way to distribute evenly even if pattern size will not give an even distribution
 * */
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
      e.move();
      e.draw();
    })
  }

  addAnt() {
    console.log('add');
    this.population++;
    this.ants.push(new Ant(
      random(0,width),
      random(0,height),
      random(0,width),
      random(0,height)
    ));
  }

  removeAnt() {
    console.log('remove');
    this.ants.pop();
    this.population++;
  }

  patternChanged(pattern) {
    if (pattern <= 0) return;
    if (pattern.length > this.population) {
      let range_dist = floor(pattern.length/this.population);
      this.ants.reduce((acc, e) => {
        e.dirx = pattern[acc][0];
        e.diry = pattern[acc][1];
        return acc + range_dist;
      }, 0);
    } else {
      this.ants.reduce((acc, e) => {
        e.dirx = pattern[acc][0];
        e.diry = pattern[acc][1];
        return (acc + 1) % pattern.length;
      }, 0);
    }
  }
}
