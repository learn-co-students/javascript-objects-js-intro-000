var playlist = {
  coldplay: 'yellow',
  u2: 'one'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
