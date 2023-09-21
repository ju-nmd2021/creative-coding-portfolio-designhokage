// function setup() {
//   createCanvas(innerWidth, innerHeight);
// }

// function draw() {}

const playBtn = document.getElementById("play-btn");
const synth = new Tone.Synth().toDestination();

playBtn.addEventListener("click", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("G3", "8n");
});
