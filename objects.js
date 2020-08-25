var playlist = {
  artistName: "I am Free"
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}