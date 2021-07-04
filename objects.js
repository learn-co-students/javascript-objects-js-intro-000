var playlist = {
  "Phil Ochs": "Slowdive"
}

var updatePlaylist = function(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
