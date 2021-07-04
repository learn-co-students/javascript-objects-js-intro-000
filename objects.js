var playlist = new Object({
  "Hans Zimmer" : "Time"
});

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}
