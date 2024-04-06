// List of tracks that have to be played
let track_list = [
  {
    name: "Demo1",
    artist: "Broke For Free",
    image: "https://picsum.photos/640/360",
    path: "songs/sample1.mp3"
  },
  {
    name: "Every Morning",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/320/180",
    path: "songs/every-morning-18304.mp3"
  },
  {
    name: "Relax and Sleep",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/480/270",
    path: "songs/relax-and-sleep-18565.mp3",
  },
  {
    name: "Uplifting Day",
    artist: "Lesfm",
    image: "https://picsum.photos/240/180",
    path: "songs/uplifting-day-15583.mp3",
  }
];

// Step 1: Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let volume_low_icon = document.querySelector('.fa-volume-down');

// Step 2: Specify globally used values
let track_index = 0;
let is_playing = false;
let interval_id;

// Step 3 : Create the audio element for the player
const audio_player = document.createElement('audio');

// loadTrack( track_index ) to load a track and set it up
function loadTrack() {
  if (interval_id) {
    clearInterval(interval_id); // stop the ui updates for the previous loaded song
  }

  const track = track_list[track_index]
  audio_player.src = track.path;
  audio_player.load();

  now_playing.innerText = `Playing ${track_index + 1} OF ${track_list.length}`;
  track_art.style.backgroundImage = `url("${track.image}")`;
  track_name.innerText = track.name;
  track_artist.innerText = track.artist;

  // set up so that the UI is updated every second
  interval_id = setInterval(seekUpdate, 1000);
}

// Set up a random background color
function random_bg_color() {

}

// Reset all values to their default
function resetValues() {
}

// To switch to playing when paused, and vice versa
function playpauseTrack() {
  if (is_playing) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  audio_player.play();
  is_playing = true;

  playpause_btn.querySelector('span').classList.remove('fa-play-circle');
  playpause_btn.querySelector('span').classList.add('fa-pause-circle');
}

function pauseTrack() {
  audio_player.pause();
  is_playing = false;

  playpause_btn.querySelector('span').classList.remove('fa-pause-circle');
  playpause_btn.querySelector('span').classList.add('fa-play-circle');
}

function nextTrack() {
  track_index = track_index + 1;

  if (track_index === track_list.length) {
    track_index = 0;
  }

  loadTrack();
  playTrack();
}

function prevTrack() {
  track_index = track_index - 1;

  if (track_index < 0) {
    track_index = track_list.length - 1;
  }

  loadTrack();
  playTrack();
}

function seekTo() {
  audio_player.currentTime = (seek_slider.value / 100) * audio_player.duration;
}

function setVolume() {
  if (volume_slider.value === '0') {
    volume_low_icon.classList.remove('fa-volume-down');
    volume_low_icon.classList.add('fa-volume-mute');
  } else {
    volume_low_icon.classList.remove('fa-volume-mute');
    volume_low_icon.classList.add('fa-volume-down');
  }

  audio_player.volume = volume_slider.value / 100;
}

// update the progress slider and durations as the music plays
function seekUpdate() {
  const currentTime = audio_player.currentTime; // how much of the song is played (in seconds)
  const duration = audio_player.duration; // duration of the song (in seconds)

  seek_slider.value = Math.floor((currentTime / duration) * 100);

  const ctMins = Math.floor(currentTime / 60);
  const ctSecs = Math.floor(currentTime - (ctMins * 60));

  const dMins = Math.floor(duration / 60);
  const dSecs = Math.floor(duration - (dMins * 60));

  // we do not have to have this logic in this loop function actually - leaving it as an exercise
  curr_time.innerText = `${('' + ctMins).padStart(2, '0')}:${('' + ctSecs).padStart(2, '0')}`;
  total_duration.innerText = `${('' + dMins).padStart(2, '0')}:${('' + dSecs).padStart(2, '0')}`;
}

// set the ball rolling when the page loads!
loadTrack();

playpause_btn.addEventListener('click', playpauseTrack);
seek_slider.addEventListener('input', seekTo);
prev_btn.addEventListener('click', prevTrack);
next_btn.addEventListener('click', nextTrack);
volume_slider.addEventListener('input', setVolume);