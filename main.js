var synth = new Tone.MonoSynth({
  "oscillator": {
    "type": "triangle"
  },
  "envelope": {
    "attack": 0.1,
    "decay": 0.2,
    "sustain": 0.1,
    "release": 0.2

  }
}).toMaster();


var piano = new Nexus.Piano('#piano', {
  lowNote: 36,
  highNote: 73
});
piano.on('change', function(key) {
  if (key.state) {
    synth.triggerAttack(Tone.Frequency(key.note, "midi"));
  } else {
    synth.triggerRelease();
  }
});