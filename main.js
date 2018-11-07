var synth = new Tone.MonoSynth({
  "oscillator": {
    "type": "sine"
  },
  "envelope": {
    "attack": 0.1,
    "decay": 0.1,
    "sustain": 0.1,
    "release": 0.1
  }
}).toMaster();

//attack slider
var attackSlider = new Nexus.Slider('#attack',{
  size: [25,125],
  mode: 'relative',
  max: 4
});

attackSlider.on('change',function(v) {
   synth.envelope.attack = v;
   console.log(v)
});

//decay slider
var decaySlider = new Nexus.Slider('#decay',{
  size: [25,125],
  mode: 'relative',
  max:4
});

decaySlider.on('change',function(v) {
   synth.envelope.decay = v;
   console.log(v)
});

var sustainSlider = new Nexus.Slider('#sustain',{
  size: [25,125],
  mode: 'relative',
  max:4
});

sustainSlider.on('change',function(v) {
   synth.envelope.sustain = v;
   console.log(v)
});

var releaseSlider = new Nexus.Slider('#release',{
  size: [25,125],
  mode: 'relative',
  max: 4,
  min: 0.1
});

releaseSlider.on('change',function(v) {
   synth.envelope.release = v;
   console.log(v)
});

//ui
var piano = new Nexus.Piano('#piano', {
  lowNote: 36,
  highNote: 73,
  'size': [500,125] //w, h
});

piano.on('change', function(key) {
  if (key.state) {
    synth.triggerAttack(Tone.Frequency(key.note, "midi"));
  } else {
    synth.triggerRelease();
  }
});

piano.value = 0.5;
piano.colorize("accent","#ff0");
piano.colorize("fill","#0082c8");
document.body.style.backgroundColor = "#000";



