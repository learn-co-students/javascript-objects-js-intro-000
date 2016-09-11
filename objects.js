var playlist = {
  names: 'song titles'
}

var updatePlaylist = function (playlist, artist, title) {
  return Object.assign({}, playlist, {[artist]: title})
}


var removeFromPlaylist = function (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
