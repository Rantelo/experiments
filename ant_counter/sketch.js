let farm;
let button;
let add;
let remove;
let dropper;

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove"
}

function preload() {
  bg = loadImage("./images/concrete.jpg");
  ant = loadImage("./images/ant.png")
  droptool = loadImage("./images/droptool.png");
}
function setup() {
  cursor('none');
  //angleMode(DEGREES);
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  farm = new Farm(100);
  dropper = new Dropper();

  button = createButton('Clear Drops');
  button.position(width - button.width - 20, 20);
  button.mousePressed(() => dropper.cleanDrops());

  add = createButton('+ Ant');
  add.position(width - add.width - 20, 40);
  add.mousePressed(modifyAntsCount.bind(null, ACTIONS.ADD));

  remove = createButton('- Ant');
  remove.position(width - remove.width - 20, 60);
  remove.mousePressed(modifyAntsCount.bind(null, ACTIONS.REMOVE));

}

function modifyAntsCount(action) {
  switch (action) {
    case ACTIONS.ADD: {
      farm.addAnt();
      break;
    }
    case ACTIONS.REMOVE: {
      farm.removeAnt();
      break;
    }
  }
}

function draw() {
  image(bg, 0, 0, width, height);
  farm.patternChanged(dropper.pattern);
  dropper.draw();
  farm.draw();
}

function mouseClicked() {
  dropper.leaveDrop();
}
