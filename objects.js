var playlist = {
  'Mars Volta': 'The Widow',
  'Queens Of The Stone Age': 'Go With the Flow',
  'Mastodon': 'Blood and Thunder'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist (playlist, artist, song) {
  delete playlist[artist]
  return playlist
}
