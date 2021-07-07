var playlist = {Rick : 'Never Going'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playList, artistName) {
  delete playlist[artistName]
  return playlist
}
