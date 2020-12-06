var playlist = {
  " Michael Jackson" : "we ae the world",
  " conky" : " I am the king",
}

function updatePlaylist(playlist, artist , song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist( playlist, artist) {
  delete playlist[artist]

  return playlist
}
