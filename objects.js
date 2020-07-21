var playlist = {
  Sublime: 'What I Got',
  'Third Eye Blind': 'Semi-Charmed Life'
}

function updatePlaylist(playlist, artist, song) {
  playlist [artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist [artistName]
  return playlist
}
