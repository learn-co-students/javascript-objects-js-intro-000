var playlist = {
  'Cardi B': "Bodak Yellow",
  'G-Eazy': 'No limit'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
