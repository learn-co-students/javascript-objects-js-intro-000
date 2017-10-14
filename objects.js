var playlist = { EltonJohn: 'Blue Eyes'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
