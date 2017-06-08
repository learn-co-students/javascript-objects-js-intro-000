var playlist = new Object();
playlist.bryanadams = "I Will Always Return"

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
