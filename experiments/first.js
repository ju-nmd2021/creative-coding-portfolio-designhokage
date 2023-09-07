let shapes = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  //background(34, 39, 46);
  //noLoop();
  frameRate(30);

  for (let i = 0; i < 50; i++) {
    let shape = {
      x: random(width),
      y: random(width),
      size: random(20, 100),
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2),
      r: random(255),
      g: random(255),
      b: random(255),
      alpha: random(100, 200),
    };
    shapes.push(shape);
  }
}

function draw() {
  background(34, 39, 46);

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];

    fill(shape.r, shape.g, shape.b, shape.alpha);

    if (random() > 0.5) {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else {
      ellipse(shape.x, shape.y, shape.size, shape.size);
    }

    shape.x += shape.xSpeed;
    shape.y += shape.ySpeed;

    shape.x = (shape.x + width) % width;
    shape.y = (shape.y + height) % height;
  }
}

// function draw() {
//   background(255);
//   for (let i = 0; i < 50; i++) {
//     let x = random(width);
//     let y = random(height);
//     let size = random(20, 100);

//     fill(random(255), random(255), random(255), 100);
//     /*rect(x, y, size, size);
//     ellipse(x, y, size, size);*/

//     // got help from Chat GPT for these lines of code
//     if (random() > 0.5) {
//       rect(x, y, size, size);
//     } else {
//       ellipse(x, y, size, size);
//     }
//   }
// }
