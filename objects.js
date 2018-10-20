var playlist = {Singer1: 'song1'};

function updatePlaylist(object, artistName, song) {
  object[artistName] = song;
  return object;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
