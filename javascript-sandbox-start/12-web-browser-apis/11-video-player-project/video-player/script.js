const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('timestamp');

function playPause() {
  if (play.classList.contains('playing')) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    play.classList.remove('playing');
    video.pause();
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    play.classList.add('playing');
    video.play();
  }
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = video.duration;
  video.currentTime = (clickX / width) * duration;
}

function updateProgress(e) {
  //console.log(e.srcElement.currentTime);
  //console.log(e.srcElement.duration);
  //console.log(e);
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.value = `${progressPercent}`;
}

video.addEventListener(
  'timeupdate',
  () => (currentTime.innerText = `00:0${video.currentTime.toFixed(0)}`)
);

stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playPause();
});

progress.addEventListener('click', setProgress);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', playPause);
video.addEventListener('click', playPause);
//<i class="fa fa-pause fa-2x"></i>
