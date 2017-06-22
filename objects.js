var playlist = {
  drake: 'popstyle',
  migos: 'slippery'
}

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name]
  return playlist
}
