var playlist = {}
playlist["coltrane"] = "naima"

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});;
}

function removeFromPlaylist(playlist, artistName) {
  var newPlaylist = Object.assign(playlist);
  delete newPlaylist[artistName]
  return newPlaylist;
}
