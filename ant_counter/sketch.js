let farm;
let button;
let add;
let remove;
const ACTIONS = {
  ADD: "add",
  REMOVE: "remove"
}

/* *
 * TODO:
 * 1. Avoid overlapping bubbles (This will decrease the number of bubbles that can exist in the canvas)
 * 2. Separate the pattern drawer into its own object
 *    1. Add a drop tool asset as the mouse pointer
 *    2. Make the drop tool leave a drop on each click
-* 3. Make this experiment full screen
-* 4. Add a background
 * 5. Add/modify buttons
-*    1. There should be a reset button
-*    2. There should be an Add Ant or Remove Ant (the asset could change to a dead ant and then disappear)
 * */

function preload() {
  bg = loadImage("./images/concrete.jpg");
  ant = loadImage("./images/ant.png")
}
function setup() {
  //angleMode(DEGREES);
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  farm = new Farm(1);

  button = createButton('Clear Drops');
  button.position(width - button.width - 20, 20);
  button.mousePressed(resetPattern);

  add = createButton('+ Ant');
  add.position(width - add.width - 20, 40);
  add.mousePressed(modifyAntsCount.bind(null, ACTIONS.ADD));

  remove = createButton('- Ant');
  remove.position(width - remove.width - 20, 60);
  remove.mousePressed(modifyAntsCount.bind(null, ACTIONS.REMOVE));

}

function resetPattern() {
  pattern = [];
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

let pattern = [];

function draw() {
  image(bg, 0, 0, width, height);
  farm.patternChanged(pattern);

  pattern.forEach(e => {
    stroke("orange");
    ellipse(e[0], e[1], e[2], e[2]);
  })

  farm.draw()
}

let drop = 0;
function mouseDragged() {

  drop += 1;
  const size = random(5,15)
  if (drop === 5) {
    drop = 0;
    pattern.push([mouseX, mouseY, size]);
  }
}

