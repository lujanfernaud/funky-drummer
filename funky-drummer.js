window.addEventListener('keydown', function(k) {
  var key = document.querySelector(`div[data-key="${k.keyCode}"]`);
  if(!key) return;

  key.classList.add('key-active');
  console.log(key);
});

window.addEventListener('keyup', function(k) {
  var key = document.querySelector(`div[data-key="${k.keyCode}"`);
  if(!key) return;

  key.classList.remove('key-active');
});
