var playlist = {
  'Legião Urbana': 'Índios',
  RPM: 'Olhar 44'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}