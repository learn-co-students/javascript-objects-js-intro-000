
var playlist = {'Phil Ochs' : 'Hallelujah'}

var updatePlaylist = (playlist, artistName, songTitle) => {
  return Object.assign({}, playlist, { artistName : songTitle })
}

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName]
}
