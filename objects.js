var playlist = new Object({window: 'house'});

function updatePlaylist (playlist, artist, song) {
  Object.assign(playlist, {[artist]: song});
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist[artistName];
//  return playlist;
}
