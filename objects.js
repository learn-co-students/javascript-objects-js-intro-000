var playlist = {"Aretha Franklin": "R-E-S-P-E-C-T"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist,artist_name) {
  delete playlist[artist_name]
  return playlist
}
