var playlist = new Object('playlist')

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playList, artistName) {
  delete playList[artistName]
  return playList
}
