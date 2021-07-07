var playlist = {
  'The Fray' : 'Syndicated',
  'OneRepublic' : 'Counting Stars'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
