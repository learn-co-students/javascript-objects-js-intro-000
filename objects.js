var playlist = {
  'Eminem' : 'Till I collapse',
  'Jay-Z' : 'Dirt off my shoulder'
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
