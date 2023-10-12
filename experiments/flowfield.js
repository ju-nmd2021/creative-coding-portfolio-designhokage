// followed a a tutorial (https://youtu.be/sZBfLgfsvSk?si=aptQbMMsLQpayvK-) and made additions and changes to give a differet feel

let particles = [];
const num = 1000;
const synth = new Tone.PolySynth().toDestination();

const noiseScale = 0.01 / 5;
let direction = 1; // Direction variable to control the flow direction

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < num; i++) {
    // Give particles random position and colors
    particles.push({
      position: createVector(random(width), random(height)),
      color: color(random(255), random(255), random(255)), // Random color
    });
  }

  clear();
}

function draw() {
  background(0, 30);
  for (let i = 0; i < num; i++) {
    let particle = particles[i];
    stroke(particle.color);
    point(particle.position.x, particle.position.y);
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

  // Play a random chord
  const chords = [
    ["C4", "E4", "G4"],
    ["D4", "F4", "A4"],
    ["E4", "G4", "B4"],
  ];

  const randomChord = chords[Math.floor(Math.random() * chords.length)];

  synth.triggerAttackRelease(randomChord, "8n");
}

// Checks if vector is within the canvas
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
