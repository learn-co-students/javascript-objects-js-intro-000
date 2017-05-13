var playlist = {"Prince": "doves"};

var updatePlaylist = (playlist, artistName, songTitle) => {
  //playlist = Object.assign({}, playlist, {[artistName]: songTitle})
  playlist[artistName] = songTitle
  return playlist
}

var removeFromPlaylist = (playlist, artistName) => {
  //delete playlist.artistName
  delete playlist[artistName]
  return playlist
}
