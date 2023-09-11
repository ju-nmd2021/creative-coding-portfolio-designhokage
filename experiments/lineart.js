function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeWeight(random(1, 5));

  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);

  line(x1, y1, x2, y2);

  for (let i = 0; i < 10; i++) {
    stroke(random(255), random(255), random(255));
    strokeWeight(random(1, 5));
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    line(x1, y1, x2, y2);
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("line_art", "png");
  }
}
