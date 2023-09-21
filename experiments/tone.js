const synth = new Tone.Synth().toDestination();
let button;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function draw() {
  button = createButton("Play");
  button.position(width / 2, height / 2);
  button.mousePressed(playSound);
}

function playSound() {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("G3", "8n");
}
