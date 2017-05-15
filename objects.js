var playlist = {
    "Kendrick Lemar": "Good Kid Mad City",
    NSYNC : "Tearing Up My Heart"
  }

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist (playlist, artist, song) {
  delete playlist[artist]
  return playlist
}
