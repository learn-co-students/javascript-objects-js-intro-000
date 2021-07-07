var playlist = {madonna: 'vogue', cher: 'turn back time'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
