function playDrumFunc(e) {
  let button = document.querySelector(
    `.key[data-key="${e.keyCode || e.target.dataset.key}"]`
  );
  let audio = document.querySelector(
    `audio[data-key="${e.keyCode || e.target.dataset.key}"]`
  );

  if (!button || !audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  button?.classList.add('playing');

  setTimeout(() => {
    button?.classList.remove('playing');
  }, 70);
}

window.addEventListener('keydown', playDrumFunc);
window.addEventListener('click', playDrumFunc);
