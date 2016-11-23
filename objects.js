var playlist = {
  "Hatebreed" : "Proven",
  "New Found Glory" : "Hit or Miss",
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
