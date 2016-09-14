var playlist = {}

function updatePlaylist(thePlaylist, names, songTitle) {
  thePlaylist[names] = songTitle
  return thePlaylist
}

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName]
  return thePlaylist
}
