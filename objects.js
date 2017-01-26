var playlist = {Carpenters: 'top of theworld', Coolio: 'gangsta\'s paradise'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
