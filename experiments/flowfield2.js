// followed a a tutorial (https://youtu.be/sZBfLgfsvSk?si=aptQbMMsLQpayvK-) and made additions and changes to give a differet feel

let particles = [];
const num = 1000;
const synth = new Tone.Synth().toDestination();

const noiseScale = 0.01 / 5;
let direction = 1; // Direction variable to control the flow direction

const palettes = [
  [
    "#FF6B6B",
    "#FFD166",
    "#06D6A0",
    "#277DA1",
    "#7A5C61",
    "#FDA7DF",
    "#5E239D",
    "#89B0AE",
  ],
  [
    "#FF7A00",
    "#FFD000",
    "#8AC926",
    "#1982C4",
    "#6A0572",
    "#AB83A1",
    "#E7ECEF",
    "#FF5A5F",
  ],
  [
    "#8A4F7D",
    "#9E768F",
    "#C6A0A4",
    "#F4E1D2",
    "#E0ADA1",
    "#8E8D8A",
    "#74535D",
    "#B7C3F3",
  ],
];

function setup() {
  createCanvas(innerWidth, innerHeight);
  const palette = random(palettes);
  for (let i = 0; i < num; i++) {
    // Give particles random position and colors
    const randomColor = random(palette);
    particles.push({
      position: createVector(random(width), random(height)),
      color: color(randomColor), // Random color
      radius: random(2, 6),
    });
  }

  clear();
}

function draw() {
  background(0, 20);
  for (let i = 0; i < num; i++) {
    let particle = particles[i];
    noStroke();
    fill(particle.color);
    ellipse(particle.position.x, particle.position.y, particle.radius);
    let n = noise(
      particle.position.x * noiseScale,
      particle.position.y * noiseScale,
      frameCount * noiseScale * noiseScale
    );

    // Change direction of particles when the mouse is released
    if (!mouseIsPressed) {
      direction = -direction;
    }

    let a = TAU * n * direction; // calculates the angle for particle movement
    particle.position.x += cos(a);
    particle.position.y += sin(a);

    // Reset particles position if it goes off the screen
    if (!onScreen(particle.position)) {
      particle.position.x = random(width);
      particle.position.y = random(height);
    }
  }
}

// Resets the noise
function mouseReleased() {
  noiseSeed(millis());

  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("G3", "8n");
}

// Checks if vector is within the canvas
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
