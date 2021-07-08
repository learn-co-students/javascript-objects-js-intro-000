var playlist = {
  bob: 'blue bird'
}

function updatePlaylist(obj, key, value) {
  obj[key] = value

  return obj
}

updatePlaylist(playlist, 'buju', 'baton')

function removeFromPlaylist() {
  delete playlist.Slowdive
}
