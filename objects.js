var playlist = {["Tom Waits"]:"Heart of Saturday Night"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]= songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
