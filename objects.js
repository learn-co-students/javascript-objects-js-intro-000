var playlist = new Object({artistName: "songTitle"})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  Object.assign({}, playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
