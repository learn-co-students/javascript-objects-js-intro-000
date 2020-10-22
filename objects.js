var playlist = {
  'Girl in Red': 'Rue',
  Gorillaz: 'Dare'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
