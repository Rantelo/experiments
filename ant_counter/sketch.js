let farm;
let button;
/* *
 * TODO:
 * 1. Avoid overlapping bubbles (This will decrease the number of bubbles that can exist in the canvas)
 * 2. Separate the pattern drawer into its own object
 *    1. Add a drop tool asset as the mouse pointer
 *    2. Make the drop tool leave a drop on each click
 * 3. Make this experiment full screen
 * 4. Add a background
 * 5. Add/modify buttons
 *    1. The should be a reset button
 *    2. There should be an Add Ant or Remove Ant (the asset could change to a dead ant and then disappear)
 * */

function setup() {
  createCanvas(640,640);
  background(245);
  frameRate(30);
  farm = new Farm(100);

  button = createButton('reset');
  button.position(width + 20, 19);
  button.mousePressed(resetPattern);
}

function resetPattern() {
  pattern = [];
}

let pattern = [];
function draw() {
  farm.patternChanged(pattern);
  background(245);

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

