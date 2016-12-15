window.addEventListener('keydown', function(k) {
  var pad = document.querySelector(`div[data-key="${k.keyCode}"]`);
  if (!pad) return;

  var audio = document.querySelector(`audio[data-key="${k.keyCode}"`);
  if (!audio) return;
  audio.play();

  pad.classList.add('pad-active');
  console.log(pad);
});

window.addEventListener('keyup', function(k) {
  var pad = document.querySelector(`div[data-key="${k.keyCode}"`);
  if (!pad) return;

  pad.classList.remove('pad-active');
});
