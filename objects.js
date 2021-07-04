var playlist = {
  'Bombay Bicycle Clun': 'Shuffle',
  Ludacris: 'Just like that'
}

function updatePlaylist(playlist, artist, song) {

  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}