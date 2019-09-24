var playlist = { artistName: 'song'}
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = 'Omar'
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
}
