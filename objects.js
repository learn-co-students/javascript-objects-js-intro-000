var playlist = {
  'john prine': 'paradise'
}

function updatePlaylist(playlist, key, value) {
  playlist[key] = value
}

function removeFromPlaylist(playlist, key) {
  delete playlist[key]
}
