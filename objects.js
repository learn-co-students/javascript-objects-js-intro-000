var playlist = {
  'Michael Jackson': 'Thriller',
  'Pink': 'So What'
}

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
