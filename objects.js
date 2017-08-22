var playlist = {BTS: "I Need U"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
