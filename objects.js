var playlist = new Object({FrankOcean: 'Chanel'})

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
}
