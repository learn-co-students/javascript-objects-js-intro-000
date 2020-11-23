var playlist = {
  BTS: 'Boy In Love',
  X: 'Moonlight'
};

function updatePlaylist(playlist, blackpink, whisle) {
  return playlist[blackpink] = whisle;
}

function removeFromPlaylist(playlist, BTS) {
  return delete playlist[BTS];
}
