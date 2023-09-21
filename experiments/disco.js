let ellipses = [];
let numEllipses = 50;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
  frameRate(30);
  addEllipses(numEllipses);
}

function draw() {
  background(34, 39, 46);

  for (let i = 0; i < ellipses.length; i++) {
    let ellipseObj = ellipses[i];
    fill(ellipseObj.color);
    ellipse(ellipseObj.x, ellipseObj.y, ellipseObj.size);
    ellipseObj.x += ellipseObj.xSpeed;
    ellipseObj.y += ellipseObj.ySpeed;
    ellipseObj.x = (ellipseObj.x + width) % width;
    ellipseObj.y = (ellipseObj.y + height) % height;
  }
}

function mouseWheel(event) {
  numEllipses += event.delta / 100;
  numEllipses = constrain(numEllipses, 1, 200);
  addEllipses(numEllipses);
  redraw();
}

function addEllipses(num) {
  ellipses = [];
  for (let i = 0; i < num; i++) {
    let ellipseObj = {
      x: random(width),
      y: random(height),
      size: random(20, 100),
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2),
      color: color(random(255), random(255), random(255), 200),
    };
    ellipses.push(ellipseObj);
  }
}
