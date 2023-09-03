function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function draw() {
  let x = random(width);
  let y = random(height);
  let w = random(width);
  let h = random(height);

  fill(random(255), random(255), random(255));

  rect(x, y, w, h);
  ellipse(x, y, w, h);
}
