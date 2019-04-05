class Dropper {
  constructor() {
    this.pattern = [];
  }

  leaveDrop(x, y) {
    const size = random(10, 20);
    this.pattern.push([mouseX, mouseY, size]);
  }

  cleanDrops() {
    this.pattern = [];
  }

  draw() {
    this.pattern.forEach(e => {
      stroke("#ff8c22");
      fill("#f7b02d");
      ellipse(e[0], e[1], e[2], e[2]);
    });
    image(droptool, mouseX, mouseY - 32, 32, 32);
  }

}
