<<<<<<< Updated upstream
const wrAudio = document.getElementById('wr-audio');
const wrTracks = Array.from(document.querySelectorAll('.wr-track-card'));
const wrNow = document.getElementById('wr-now-text');
const wrTime = document.getElementById('wr-time');
const wrProgress = document.getElementById('wr-progress');
const wrPrev = document.getElementById('wr-prev');
const wrPlay = document.getElementById('wr-play');
const wrNext = document.getElementById('wr-next');
const wrVolume = document.getElementById('wr-volume');

const wrBuyOverlay = document.getElementById('wr-buy-overlay');
const wrBuyTrackLabel = document.getElementById('wr-buy-track-label');
const wrBuyMp3 = document.getElementById('wr-buy-mp3');
const wrBuyWav = document.getElementById('wr-buy-wav');
const wrBuyStems = document.getElementById('wr-buy-stems');
const wrBuyDonate = document.getElementById('wr-buy-donate');
const wrBuyClose = document.getElementById('wr-buy-close');

let wrIndex = 0;
let wrCurrentTrackCard = null;

function wrFormatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function wrLoadTrack(i, autoplay = true) {
  wrIndex = i;
  const card = wrTracks[wrIndex];
  wrCurrentTrackCard = card;

  wrTracks.forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  wrAudio.src = card.dataset.src;

  const title = card.querySelector('.wr-track-title').textContent;
  wrNow.textContent = "Original music written and produced by John Watson • Now Playing: " + title;

  if (autoplay) wrAudio.play();
}

wrTracks.forEach((card, i) => {
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('wr-buy-btn')) return;
    wrLoadTrack(i, true);
  });

  const buyBtn = card.querySelector('.wr-buy-btn');
  buyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    wrOpenBuyPopup(card);
  });
});

function wrOpenBuyPopup(card) {
  wrCurrentTrackCard = card;
  const title = card.querySelector('.wr-track-title').textContent;
  wrBuyTrackLabel.textContent = title;

  wrBuyMp3.onclick = () => window.open(card.dataset.mp3, '_blank');
  wrBuyWav.onclick = () => window.open(card.dataset.wav, '_blank');
  wrBuyStems.onclick = () => window.open(card.dataset.stems, '_blank');
  wrBuyDonate.onclick = () => window.open(card.dataset.donate, '_blank');

  wrBuyOverlay.style.display = 'flex';
}

wrBuyClose.addEventListener('click', () => {
  wrBuyOverlay.style.display = 'none';
});

wrBuyOverlay.addEventListener('click', (e) => {
  if (e.target === wrBuyOverlay) {
    wrBuyOverlay.style.display = 'none';
  }
});

wrPrev.addEventListener('click', () => {
  wrIndex = (wrIndex - 1 + wrTracks.length) % wrTracks.length;
  wrLoadTrack(wrIndex, true);
});

wrNext.addEventListener('click', () => {
  wrIndex = (wrIndex + 1) % wrTracks.length;
  wrLoadTrack(wrIndex, true);
});

wrPlay.addEventListener('click', () => {
  if (!wrAudio.src) {
    wrLoadTrack(0, true);
    return;
  }
  if (wrAudio.paused) {
    wrAudio.play();
  } else {
    wrAudio.pause();
  }
});

wrAudio.addEventListener('timeupdate', () => {
  const cur = wrAudio.currentTime || 0;
  const dur = wrAudio.duration || 0;
  wrTime.textContent = `${wrFormatTime(cur)} / ${wrFormatTime(dur)}`;
  const pct = dur ? (cur / dur) * 100 : 0;
  wrProgress.style.width = pct + '%';
});

wrAudio.addEventListener('ended', () => {
  wrIndex = (wrIndex + 1) % wrTracks.length;
  wrLoadTrack(wrIndex, true);
});

wrVolume.addEventListener('input', () => {
  wrAudio.volume = parseFloat(wrVolume.value);
});

if (wrTracks.length > 0) {
  wrLoadTrack(0, false);
}
=======
const wrAudio = document.getElementById('wr-audio');
const wrTracks = Array.from(document.querySelectorAll('.wr-track-card'));
const wrNow = document.getElementById('wr-now-text');
const wrTime = document.getElementById('wr-time');
const wrProgress = document.getElementById('wr-progress');
const wrPrev = document.getElementById('wr-prev');
const wrPlay = document.getElementById('wr-play');
const wrNext = document.getElementById('wr-next');
const wrVolume = document.getElementById('wr-volume');

const wrBuyOverlay = document.getElementById('wr-buy-overlay');
const wrBuyTrackLabel = document.getElementById('wr-buy-track-label');
const wrBuyMp3 = document.getElementById('wr-buy-mp3');
const wrBuyWav = document.getElementById('wr-buy-wav');
const wrBuyStems = document.getElementById('wr-buy-stems');
const wrBuyDonate = document.getElementById('wr-buy-donate');
const wrBuyClose = document.getElementById('wr-buy-close');

let wrIndex = 0;
let wrCurrentTrackCard = null;

function wrFormatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function wrLoadTrack(i, autoplay = true) {
  wrIndex = i;
  const card = wrTracks[wrIndex];
  wrCurrentTrackCard = card;

  wrTracks.forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  wrAudio.src = card.dataset.src;

  const title = card.querySelector('.wr-track-title').textContent;
  wrNow.textContent = "Original music written and produced by John Watson • Now Playing: " + title;

  if (autoplay) wrAudio.play();
}

wrTracks.forEach((card, i) => {
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('wr-buy-btn')) return;
    wrLoadTrack(i, true);
  });

  const buyBtn = card.querySelector('.wr-buy-btn');
  buyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    wrOpenBuyPopup(card);
  });
});

function wrOpenBuyPopup(card) {
  wrCurrentTrackCard = card;
  const title = card.querySelector('.wr-track-title').textContent;
  wrBuyTrackLabel.textContent = title;

  wrBuyMp3.onclick = () => window.open(card.dataset.mp3, '_blank');
  wrBuyWav.onclick = () => window.open(card.dataset.wav, '_blank');
  wrBuyStems.onclick = () => window.open(card.dataset.stems, '_blank');
  wrBuyDonate.onclick = () => window.open(card.dataset.donate, '_blank');

  wrBuyOverlay.style.display = 'flex';
}

wrBuyClose.addEventListener('click', () => {
  wrBuyOverlay.style.display = 'none';
});

wrBuyOverlay.addEventListener('click', (e) => {
  if (e.target === wrBuyOverlay) {
    wrBuyOverlay.style.display = 'none';
  }
});

wrPrev.addEventListener('click', () => {
  wrIndex = (wrIndex - 1 + wrTracks.length) % wrTracks.length;
  wrLoadTrack(wrIndex, true);
});

wrNext.addEventListener('click', () => {
  wrIndex = (wrIndex + 1) % wrTracks.length;
  wrLoadTrack(wrIndex, true);
});

wrPlay.addEventListener('click', () => {
  if (!wrAudio.src) {
    wrLoadTrack(0, true);
    return;
  }
  if (wrAudio.paused) {
    wrAudio.play();
  } else {
    wrAudio.pause();
  }
});

wrAudio.addEventListener('timeupdate', () => {
  const cur = wrAudio.currentTime || 0;
  const dur = wrAudio.duration || 0;
  wrTime.textContent = `${wrFormatTime(cur)} / ${wrFormatTime(dur)}`;
  const pct = dur ? (cur / dur) * 100 : 0;
  wrProgress.style.width = pct + '%';
});

wrAudio.addEventListener('ended', () => {
  wrIndex = (wrIndex + 1) % wrTracks.length;
  wrLoadTrack(wrIndex, true);
});

wrVolume.addEventListener('input', () => {
  wrAudio.volume = parseFloat(wrVolume.value);
});

if (wrTracks.length > 0) {
  wrLoadTrack(0, false);
}
>>>>>>> Stashed changes
