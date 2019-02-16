var playlist = {
  Tupac : 'All Eyez On Me',
  TVZ: 'Snowin on Raton'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
