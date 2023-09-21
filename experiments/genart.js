function setup() {
  createCanvas(innerWidth, innerHeight);
  //background(34, 39, 46);
  noLoop();
  frameRate(5);
}
function draw() {
  background(255);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 100);

    fill(random(255), random(255), random(255), 100);
    /*rect(x, y, size, size);
    ellipse(x, y, size, size);*/

    // got help from Chat GPT for these lines of code
    if (random() > 0.5) {
      rect(x, y, size, size);
    } else {
      ellipse(x, y, size, size);
    }
  }
}
